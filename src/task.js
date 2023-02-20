const taskStorage = [];

class CreateTask {
  constructor(name, description, date, project, priority) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.project = project;
    this.priority = priority;
  }
}

// const example = new CreateTask("Clean your Room", "Don't forget Soap", date, project, "low");

const addTaskToStorage = (task) => {
  taskStorage.push(task);
};

const removeTaskFromStorage = (task) => {};

export { taskStorage, CreateTask, addTaskToStorage, removeTaskFromStorage };

// Idea on how to handle task/projects. Store them in an array, and each element in the sidebar will loop through that array with the condition it calls for.
