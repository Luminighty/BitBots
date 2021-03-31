use std::collections::{VecDeque, Vec};

use super::module;

/// Defines the current state for Instructable
pub enum WorkState {
    /// Waiting for the next instruction
    Idle,
    
    Work(u32),
    Finished
}

impl WorkState {
    pub fn step(&self) -> Self {
        match self {
            WorkState::Work(0) -> WorkState::Finished
            WorkState::Work(x) -> WorkState::Work(x-1)
            _ -> self
        }
    }
}

/// Used to collect the possible errors while posting an instruction
pub enum InstructionError {
    /// Used when the client is trying to insert too many instructions at once
    TooManyInstructions,
    /// Defines which module is missing
    MissingModule(module::Module),
}

/// Allows the struct to receive instructions from the client
pub trait Instructable<Instruction, StuckCause = ()> {
    /// Returns the Instructions Queue
    fn get_instructions(&self) -> VecDeque<T>;
    /// Returns the last WorkState work() has returns
    fn get_work_state(&self) -> WorkState;
    /// Called when an instruction can't be executed in do_instruction, this should set the state of the object to Stuck
    fn stuck(&mut self, cause: StuckCause);

    /// Adds instructions to the object, or returns an InstructionError
    fn add(&mut self, instruction: Vec<Instruction>) -> Result<(), InstructionError>;
    /// Checks whenever an instruction can be added to the queue or not
    fn can_add(&self, instruction: Instruction) -> Result<(), InstructionError>;
    /// Tries to execute the instruction, or returns an cause for why it got stuck
    fn do_instruction(&mut self, instruction: Instruction) -> Result<(), StuckCause>;
    /// Returns the ticks an instruction would cost
    fn get_instruction_cost(&self, instruction: Instruction);
    /// Clears the instruction Queue
    fn clear_instructions(&mut self);

    /// Updates the Workstate, and executes the current instruction
    /// Will call stuck and clear_instructions if do_instruction returns an error
    fn work(&mut self) -> WorkState {
        let i : VecDeque<T> = self.get_instructions();
        if let Some(cur) = i.front() {
            match self.get_work_state() {
                WorkState::Finished -> { 
                    if let Error(cause) = self.do_instruction(cur) {
                        self.stuck(cause);
                        self.clear_instructions();
                    } else {
                        i.pop_front();
                    }

                    match i.front() {
                        Some(new_work) => WorkState::Work(self.get_instruction_cost(new_work))
                        _              => WorkState::Idle
                    }
                }
                WorkState::Idle -> WorkState::Work(self.get_instruction_cost(cur))
                x -> x.step();
            }
        } else {
            WorkState::Idle
        }
    }
}