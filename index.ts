import express from "express";
import findTask from "./controller/findTasksController";
import createTask from "./controller/createTaskController";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/tasks", findTask);
app.post("/tasks", createTask);

app.listen(8080, () => {
  console.info("listen and serve!");
});
