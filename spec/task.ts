import { Task } from "@prisma/client";
import { z } from "zod";

export function validateTask(task: Task): void {
  console.log(task);

  if (task.created_at > task.updated_at) {
    throw new Error("created_at must be before updated_at or equal");
  }

  z.number().positive().parse(task.id);
  z.number().positive().parse(task.userId);
}

export function listEmergencyTasks(tasks: Array<Task>): Array<Task> {
  const now = new Date();
  return tasks.filter(
    (task) => task.deadlineAt && task.deadlineAt > now && task.status !== "DONE"
  );
}
