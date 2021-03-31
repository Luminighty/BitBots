use super::module;

/// Used to collect the possible errors with modules
enum ModularError {
    /// The object can't use this module
    IncompatibleModule,
    /// The object's module list is full, thus we can't add more. The client will have to remove one first
    ModuleListFull
}

pub trait Modular {
    /// Checks whenever the object can use a certain module or not
    fn can_use_module(module::Module) -> bool;
    /// Returns how many copies the object have of one kind
    fn get_module_count(&self, module::Module) -> usize;
    /// Tries to attach a module to itself
    fn add(&mut self, module::Module) -> Result<(), ModularError>;
    /// Tries to remove a certain module from itself, returns with itself if it succeeds
    fn remove(&mut self, module::Module) -> Option<module::Module>;
}