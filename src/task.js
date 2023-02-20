const taskStorage = [];

class CreateTask {
  constructor(name, description, date, project, priority, completed) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.project = project;
    this.priority = priority;
    this.completed = completed;
  }
}

const addTaskToStorage = (task) => {
  taskStorage.push(task);
};

const removeTaskFromStorage = (id) => {
  taskStorage.splice(id.id, 1);
};

export { taskStorage, CreateTask, addTaskToStorage, removeTaskFromStorage };

// Idea on how to handle task/projects. Store them in an array, and each element in the sidebar will loop through that array with the condition it calls for.
