import { Router } from "express";

export const unitInstructionRouter = Router();

unitInstructionRouter
.use((req, res, next) => {
    // get the unit and pass it forward in request
    next();
})
.post('', async (req, res) => {

})