import { Task } from "@prisma/client";

function listEmergencyTasks(tasks: Array<Task>): Array<Task> {
  const now = new Date();
  return tasks.filter(
    (task) => task.deadlineAt && task.deadlineAt > now && task.status !== "DONE"
  );
}
