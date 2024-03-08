import express from "express";
import findTask from "./controller/findTasksController";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/tasks", findTask);

app.listen(8080, () => {
  console.info("listen and serve!");
});
