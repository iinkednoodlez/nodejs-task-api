const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(express.static(__dirname + "/.."));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/../index.html");
});

const getTasks = () => {
  let data = fs.readFileSync("./api.json", "utf-8");
  return JSON.parse(data);
};

const saveTasks = (tasks) => {
  fs.writeFileSync("./api.json", JSON.stringify(tasks, null, 2));
};

app.get("/api/tasks", (req, res) => {
  let tasks = getTasks();

  res.json(tasks);
});

app.get("/api/tasks/:id", (req, res) => {
  let tasks = getTasks();

  let id = Number(req.params.id);

  let foundTask = tasks.filter((task) => task.id === id);

  res.json(foundTask);
});

app.post("/api/tasks/:description", (req, res) => {
  let tasks = getTasks();

  let id;

  if (tasks.length > 0) {
    id = tasks[tasks.length - 1].id + 1;
  } else {
    id = 1;
  }

  let newTask = {
    id: id,
    description: req.params.description,
  };

  tasks.push(newTask);

  saveTasks(tasks);

  console.log("Task Added");
  console.log(newTask);

  res.json(newTask);
});

app.delete("/api/tasks/:id", (req, res) => {
  let tasks = getTasks();

  let id = Number(req.params.id);

  let updatedTasks = tasks.filter((task) => task.id !== id);

  saveTasks(updatedTasks);

  console.log("Task Deleted");
  console.log(id);

  res.json({
    message: "Task Deleted",
    id: id,
  });
});
app.listen(PORT, () => {
  console.log("Server running on port.. . ." + PORT);
});
