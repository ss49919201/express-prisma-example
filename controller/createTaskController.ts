import express from "express";
import { validateTask } from "../spec/task";
import { ZodError } from "zod";

async function createTask(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    console.log(req.body);
    validateTask({
      id: req.body.id,
      userId: req.body.userId,
      status: req.body.status,
      deadlineAt: req.body.deadlineAt,
      created_at: new Date(),
      updated_at: new Date(),
    });
  } catch (e) {
    if (e instanceof ZodError) {
      res
        .status(400)
        .send({ messages: e.errors.map((error) => error.message) });
      return;
    }

    res.status(400).send(e);
    return;
  }

  next();
}

export default createTask;
