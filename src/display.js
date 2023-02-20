import { taskStorage } from "./task";

const contentContainer = document.querySelector(".content");
const tasksContainer = document.querySelector(".tasks-container");
const completedContainer = document.querySelector(".completed-container");

(function contentButtonListener() {
  console.log("ping");
  contentContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-task")) {
      console.log();
    } else if (event.target.classList.contains("delete-task")) {
      console.log(event.target);
    } else if (event.target.classList.contains("open-task")) {
      console.log();
    }
  });
})();

const clearDisplay = () => {
  let child = tasksContainer.lastElementChild;
  while (child) {
    tasksContainer.removeChild(child);
    child = tasksContainer.lastElementChild;
  }
};

function addTaskToDisplay(i) {
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  tasksContainer.appendChild(newTask);

  const newTaskLeft = document.createElement("div");
  newTaskLeft.classList.add("left");
  newTask.appendChild(newTaskLeft);
  const taskOpen = document.createElement("img");
  taskOpen.classList.add("open-task");
  taskOpen.src = "img/task-open.png";
  newTaskLeft.appendChild(taskOpen);
  const taskDetails = document.createElement("div");
  taskDetails.classList.add("details");
  newTaskLeft.appendChild(taskDetails);
  const taskTitle = document.createElement("h2");
  taskTitle.textContent = taskStorage[i].name;
  const taskDescription = document.createElement("p");
  taskDescription.textContent = taskStorage[i].description;
  taskDetails.append(taskTitle, taskDescription);

  const newTaskRight = document.createElement("div");
  newTaskRight.classList.add("right");
  newTask.appendChild(newTaskRight);
  const taskDate = document.createElement("div");
  taskDate.classList.add("date");
  taskDate.textContent = taskStorage[i].date;
  newTaskRight.appendChild(taskDate);
  const taskButtons = document.createElement("div");
  taskButtons.classList.add("task-buttons");
  newTaskRight.appendChild(taskButtons);
  const editTask = document.createElement("img");
  const deleteTask = document.createElement("img");
  editTask.classList.add("edit-task");
  deleteTask.classList.add("delete-task");
  editTask.src = "img/edit.png";
  deleteTask.src = "img/delete.png";
  taskButtons.append(editTask, deleteTask);
}

const updateDisplay = () => {
  clearDisplay();

  for (let i = 0; i < taskStorage.length; i++) {
    addTaskToDisplay(i);
  }
};

const initSideBar = () => {
  const sidebar = document.querySelector(".sidebar");

  sidebar.addEventListener("click", (event) => {
    if (event.target.classList.contains("project-item")) {
      updateDisplay();
      console.log(event.target);
    }
  });
};

export { initSideBar, updateDisplay };
