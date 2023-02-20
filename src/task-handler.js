import { CreateTask, addTaskToStorage, taskStorage } from "./task";
import { updateDisplay } from "./display";

const initTaskHandlers = () => {
  const addTaskButton = document.querySelector(".addtaskbutton");
  const taskForm = document.querySelector(".form-overlay");

  let priority = null;

  (function priorityHandler() {
    const lowPriority = document.querySelector(".low-priority");
    const mediumPriority = document.querySelector(".medium-priority");
    const highPriority = document.querySelector(".high-priority");

    function prioritySwapper(event) {
      if (event.target.classList.contains("low-priority")) {
        priority = "low";
        lowPriority.style.borderColor = "black";
        mediumPriority.style.borderColor = "white";
        highPriority.style.borderColor = "white";
      } else if (event.target.classList.contains("medium-priority")) {
        priority = "medium";
        lowPriority.style.borderColor = "white";
        mediumPriority.style.borderColor = "black";
        highPriority.style.borderColor = "white";
      } else if (event.target.classList.contains("high-priority")) {
        priority = "high";
        lowPriority.style.borderColor = "white";
        mediumPriority.style.borderColor = "white";
        highPriority.style.borderColor = "black";
      }
    }

    lowPriority.addEventListener("click", prioritySwapper);
    mediumPriority.addEventListener("click", prioritySwapper);
    highPriority.addEventListener("click", prioritySwapper);
  })();

  addTaskButton.addEventListener("click", () => {
    taskForm.style.display = "flex";
    priority = null;
  });

  const taskFormAddButton = document.querySelector(".task-form-add-button");
  const taskFormCancelButton = document.querySelector(
    ".task-form-cancel-button"
  );

  function closeForm(event) {
    event.preventDefault();
    taskForm.style.display = "none";
  }

  function loadFormElements(event) {
    event.preventDefault();

    const taskName = document.querySelector("#taskname").value;
    const taskDescription = document.querySelector("#taskdescription").value;
    const taskDate = document.querySelector("#date").value;
    const project = document.querySelector("#projects").value;
    const taskPriority = priority;

    const task = new CreateTask(
      taskName,
      taskDescription,
      taskDate,
      project,
      taskPriority
    );
    addTaskToStorage(task);
    taskForm.style.display = "none";
    console.table(taskStorage);
    updateDisplay();
  }

  taskFormAddButton.addEventListener("click", loadFormElements);
  taskFormCancelButton.addEventListener("click", closeForm);
};

export default initTaskHandlers;
