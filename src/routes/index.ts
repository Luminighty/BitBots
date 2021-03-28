import { Router } from "express";
import { unitRouter } from "./unit";
import { unitInstructionRouter } from "./unit.instruction";
import { stateRouter } from "./state";

export const router = Router();

router.use('state', stateRouter);
router.use('unit', unitRouter);
router.use('unit/:id/instruction', unitInstructionRouter);