import express from "express";
import prisma from "../prisma";
import Prisma from "@prisma/client";

async function findTask(req: express.Request, res: express.Response) {
  const userName = req.query.userName;
  const taskWhereInput: Prisma.Prisma.TaskWhereInput = {
    user: {
      name:
        typeof userName === "string" && userName.length > 0
          ? userName
          : undefined,
    },
  };

  const tasks = await prisma.task.findMany({
    where: taskWhereInput,
  });

  res.send(tasks);
}

export default findTask;
