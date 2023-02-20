// eslint-disable-next-line import/no-extraneous-dependencies
import { format, isAfter, parseISO } from "date-fns";
import { taskStorage, removeTaskFromStorage } from "./task";

const contentContainer = document.querySelector(".content");
const projectContainer = document.querySelector(".projects-container");
const tasksContainer = document.querySelector(".tasks-container");
const completedContainer = document.querySelector(".completed-container");
let selectedProject = "all";

const clearDisplay = () => {
  let child = tasksContainer.lastElementChild;
  while (child) {
    tasksContainer.removeChild(child);
    child = tasksContainer.lastElementChild;
  }

  let completeChild = completedContainer.lastElementChild;
  while (completeChild) {
    completedContainer.removeChild(completeChild);
    completeChild = completedContainer.lastElementChild;
  }
};

function addTaskToDisplay(i) {
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.id = i;
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
  if (taskStorage[i].priority === "low") {
    taskTitle.style.color = "green";
  } else if (taskStorage[i].priority === "medium") {
    taskTitle.style.color = "yellow";
  } else if (taskStorage[i].priority === "high") {
    taskTitle.style.color = "red";
  }
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
  const deleteTask = document.createElement("img");
  deleteTask.classList.add("delete-task");
  deleteTask.src = "img/delete.png";
  taskButtons.appendChild(deleteTask);
}

function addTaskToComplete(i) {
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.id = i;
  completedContainer.appendChild(newTask);

  const newTaskLeft = document.createElement("div");
  newTaskLeft.classList.add("left");
  newTask.appendChild(newTaskLeft);
  const taskOpen = document.createElement("img");
  taskOpen.classList.add("complete-task");
  taskOpen.src = "img/task-complete.png";
  newTaskLeft.appendChild(taskOpen);
  const taskDetails = document.createElement("div");
  taskDetails.classList.add("details");
  newTaskLeft.appendChild(taskDetails);
  const taskTitle = document.createElement("h2");
  if (taskStorage[i].priority === "low") {
    taskTitle.style.color = "green";
  } else if (taskStorage[i].priority === "medium") {
    taskTitle.style.color = "yellow";
  } else if (taskStorage[i].priority === "high") {
    taskTitle.style.color = "red";
  }
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
  const deleteTask = document.createElement("img");
  deleteTask.classList.add("delete-task");
  deleteTask.src = "img/delete.png";
  taskButtons.appendChild(deleteTask);
}

const updateDisplay = () => {
  clearDisplay();
  if (selectedProject === "all") {
    for (let i = 0; i < taskStorage.length; i++) {
      if (taskStorage[i].completed === false) {
        addTaskToDisplay(i);
      } else {
        addTaskToComplete(i);
      }
    }
  } else if (selectedProject === "today") {
    const currentDate = format(new Date(), "yyyy-MM-dd");
    for (let i = 0; i < taskStorage.length; i++) {
      if (
        taskStorage[i].completed === false &&
        taskStorage[i].date === currentDate
      ) {
        addTaskToDisplay(i);
      }
      if (
        taskStorage[i].completed === true &&
        taskStorage[i].date === currentDate
      ) {
        addTaskToComplete(i);
      }
    }
  } else if (selectedProject === "upcoming") {
    const currentDate = new Date();
    for (let i = 0; i < taskStorage.length; i++) {
      if (
        taskStorage[i].completed === false &&
        isAfter(parseISO(taskStorage[i].date), currentDate)
      ) {
        addTaskToDisplay(i);
      }
      if (
        taskStorage[i].completed === true &&
        isAfter(parseISO(taskStorage[i].date), currentDate)
      ) {
        addTaskToComplete(i);
      }
    }
  } else {
    for (let i = 0; i < taskStorage.length; i++) {
      if (
        taskStorage[i].completed === false &&
        taskStorage[i].project === selectedProject
      ) {
        addTaskToDisplay(i);
      }
      if (
        taskStorage[i].completed === true &&
        taskStorage[i].project === selectedProject
      ) {
        addTaskToComplete(i);
      }
    }
  }
};
(function contentButtonListener() {
  contentContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-task")) {
      const task = event.target.parentElement.parentElement.parentElement;
      removeTaskFromStorage(task.id);
      updateDisplay();
      console.log(taskStorage);
    } else if (event.target.classList.contains("open-task")) {
      const task = event.target.parentElement.parentElement;
      taskStorage[task.id].completed = true;
      updateDisplay();
    } else if (event.target.classList.contains("complete-task")) {
      const task = event.target.parentElement.parentElement;
      taskStorage[task.id].completed = false;
      task.remove();
      updateDisplay();
    }
  });
})();

const initSideBar = () => {
  const sidebar = document.querySelector(".sidebar");

  // Removes Project from Sidebar and Task Form
  function removeProject(child) {
    projectContainer.removeChild(child);
    const projectList = document.querySelectorAll("option");
    projectList.forEach((listItem) => {
      if (listItem.textContent === child.textContent) {
        listItem.remove();
      }
    });
  }

  sidebar.addEventListener("click", (event) => {
    if (event.target.classList.contains("project-item")) {
      const projects = document.querySelectorAll(".project-item");
      projects.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.style.backgroundColor = "#3e4c59";
      });
      const project = event.target;
      project.style.backgroundColor = "#7b8794";
      selectedProject = project.id;
      console.log(selectedProject);
      updateDisplay();
    } else if (event.target.classList.contains("delete-project")) {
      removeProject(event.target.parentElement);
    }
  });
};

export { initSideBar, updateDisplay };
