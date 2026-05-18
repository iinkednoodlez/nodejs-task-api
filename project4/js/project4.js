const URL = `http://localhost:3333/api/tasks`;

let taskList;
let mainContent;

const init = () => {
  mainContent = document.getElementById("main");

  taskList = document.createElement("ul");
  taskList.setAttribute("id", "taskList");
  taskList.setAttribute("style", "list-style-type: none");

  mainContent.appendChild(taskList);

  let button = document.querySelector("#addTask");
  button.addEventListener("click", addNewTask);

  displayAllTasks();
};

const displayAllTasks = async () => {
  let response = await fetch(URL, {
    method: "GET",
  });

  let data = await response.json();

  taskList.innerHTML = "";

  if (data.length > 0) {
    for (let index = 0; index < data.length; index++) {
      let listItem = document.createElement("li");

      let taskId = data[index].id;

      let description = data[index].description;

      let taskText = document.createElement("span");
      taskText.textContent = index + 1 + " - " + description + " ";

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("class", "deleteButton");

      deleteButton.addEventListener("click", () => {
        deleteTask(taskId);
      });

      listItem.appendChild(taskText);
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);
    }
  } else {
    taskList.innerHTML = "No tasks to display.";
  }
};

const addNewTask = async () => {
  let taskDescription = document.querySelector("#task").value;

  await fetch(URL + "/" + taskDescription, {
    method: "POST",
  });
  console.log("Task Added");

  document.querySelector("#task").value = "";
  displayAllTasks();
};

const deleteTask = async (taskId) => {
  await fetch(URL + "/" + taskId, {
    method: "DELETE",
  });

  console.log("Task Deleted");

  displayAllTasks();
};

window.onload = init;
