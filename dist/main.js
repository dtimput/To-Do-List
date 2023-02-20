/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initSideBar\": () => (/* binding */ initSideBar),\n/* harmony export */   \"updateDisplay\": () => (/* binding */ updateDisplay)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\nconst contentContainer = document.querySelector(\".content\");\r\nconst tasksContainer = document.querySelector(\".tasks-container\");\r\nconst completedContainer = document.querySelector(\".completed-container\");\r\n\r\n(function contentButtonListener() {\r\n  console.log(\"ping\");\r\n  contentContainer.addEventListener(\"click\", (event) => {\r\n    if (event.target.classList.contains(\"edit-task\")) {\r\n      console.log();\r\n    } else if (event.target.classList.contains(\"delete-task\")) {\r\n      console.log(event.target);\r\n    } else if (event.target.classList.contains(\"open-task\")) {\r\n      console.log();\r\n    }\r\n  });\r\n})();\r\n\r\nconst clearDisplay = () => {\r\n  let child = tasksContainer.lastElementChild;\r\n  while (child) {\r\n    tasksContainer.removeChild(child);\r\n    child = tasksContainer.lastElementChild;\r\n  }\r\n};\r\n\r\nfunction addTaskToDisplay(i) {\r\n  const newTask = document.createElement(\"div\");\r\n  newTask.classList.add(\"task\");\r\n  tasksContainer.appendChild(newTask);\r\n\r\n  const newTaskLeft = document.createElement(\"div\");\r\n  newTaskLeft.classList.add(\"left\");\r\n  newTask.appendChild(newTaskLeft);\r\n  const taskOpen = document.createElement(\"img\");\r\n  taskOpen.classList.add(\"open-task\");\r\n  taskOpen.src = \"img/task-open.png\";\r\n  newTaskLeft.appendChild(taskOpen);\r\n  const taskDetails = document.createElement(\"div\");\r\n  taskDetails.classList.add(\"details\");\r\n  newTaskLeft.appendChild(taskDetails);\r\n  const taskTitle = document.createElement(\"h2\");\r\n  taskTitle.textContent = _task__WEBPACK_IMPORTED_MODULE_0__.taskStorage[i].name;\r\n  const taskDescription = document.createElement(\"p\");\r\n  taskDescription.textContent = _task__WEBPACK_IMPORTED_MODULE_0__.taskStorage[i].description;\r\n  taskDetails.append(taskTitle, taskDescription);\r\n\r\n  const newTaskRight = document.createElement(\"div\");\r\n  newTaskRight.classList.add(\"right\");\r\n  newTask.appendChild(newTaskRight);\r\n  const taskDate = document.createElement(\"div\");\r\n  taskDate.classList.add(\"date\");\r\n  taskDate.textContent = _task__WEBPACK_IMPORTED_MODULE_0__.taskStorage[i].date;\r\n  newTaskRight.appendChild(taskDate);\r\n  const taskButtons = document.createElement(\"div\");\r\n  taskButtons.classList.add(\"task-buttons\");\r\n  newTaskRight.appendChild(taskButtons);\r\n  const editTask = document.createElement(\"img\");\r\n  const deleteTask = document.createElement(\"img\");\r\n  editTask.classList.add(\"edit-task\");\r\n  deleteTask.classList.add(\"delete-task\");\r\n  editTask.src = \"img/edit.png\";\r\n  deleteTask.src = \"img/delete.png\";\r\n  taskButtons.append(editTask, deleteTask);\r\n}\r\n\r\nconst updateDisplay = () => {\r\n  clearDisplay();\r\n\r\n  for (let i = 0; i < _task__WEBPACK_IMPORTED_MODULE_0__.taskStorage.length; i++) {\r\n    addTaskToDisplay(i);\r\n  }\r\n};\r\n\r\nconst initSideBar = () => {\r\n  const sidebar = document.querySelector(\".sidebar\");\r\n\r\n  sidebar.addEventListener(\"click\", (event) => {\r\n    if (event.target.classList.contains(\"project-item\")) {\r\n      updateDisplay();\r\n      console.log(event.target);\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-handler */ \"./src/project-handler.js\");\n/* harmony import */ var _task_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-handler */ \"./src/task-handler.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\r\n\r\n\r\n\r\n(0,_project_handler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_task_handler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_display__WEBPACK_IMPORTED_MODULE_2__.initSideBar)();\r\nconsole.log(\"all elements loaded\");\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/project-handler.js":
/*!********************************!*\
  !*** ./src/project-handler.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initProjectHandlers = () => {\r\n  const projectContainer = document.querySelector(\".projects-container\");\r\n  const addProjectButton = document.querySelector(\".addprojectbutton\");\r\n  const projectForm = document.querySelector(\".add-project\");\r\n  const projectSubmitButton = document.querySelector(\".project-submit-button\");\r\n  const projectCancelButton = document.querySelector(\".project-cancel-button\");\r\n\r\n  function showProjectForm() {\r\n    projectForm.style.display = \"contents\";\r\n  }\r\n\r\n  function submitProject(event) {\r\n    event.preventDefault();\r\n    const projectName = document.querySelector(\"#projectname\").value;\r\n    const project = document.createElement(\"div\");\r\n\r\n    project.classList.add(\"project-item\");\r\n    project.id = projectName;\r\n    project.textContent = projectName;\r\n    projectContainer.appendChild(project);\r\n\r\n    projectForm.style.display = \"none\";\r\n  }\r\n\r\n  function cancelProject(event) {\r\n    event.preventDefault();\r\n    projectForm.style.display = \"none\";\r\n  }\r\n\r\n  addProjectButton.addEventListener(\"click\", showProjectForm);\r\n  projectSubmitButton.addEventListener(\"click\", submitProject);\r\n  projectCancelButton.addEventListener(\"click\", cancelProject);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initProjectHandlers);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/project-handler.js?");

/***/ }),

/***/ "./src/task-handler.js":
/*!*****************************!*\
  !*** ./src/task-handler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\r\n\r\n\r\nconst initTaskHandlers = () => {\r\n  const addTaskButton = document.querySelector(\".addtaskbutton\");\r\n  const taskForm = document.querySelector(\".form-overlay\");\r\n\r\n  let priority = null;\r\n\r\n  (function priorityHandler() {\r\n    const lowPriority = document.querySelector(\".low-priority\");\r\n    const mediumPriority = document.querySelector(\".medium-priority\");\r\n    const highPriority = document.querySelector(\".high-priority\");\r\n\r\n    function prioritySwapper(event) {\r\n      if (event.target.classList.contains(\"low-priority\")) {\r\n        priority = \"low\";\r\n        lowPriority.style.borderColor = \"black\";\r\n        mediumPriority.style.borderColor = \"white\";\r\n        highPriority.style.borderColor = \"white\";\r\n      } else if (event.target.classList.contains(\"medium-priority\")) {\r\n        priority = \"medium\";\r\n        lowPriority.style.borderColor = \"white\";\r\n        mediumPriority.style.borderColor = \"black\";\r\n        highPriority.style.borderColor = \"white\";\r\n      } else if (event.target.classList.contains(\"high-priority\")) {\r\n        priority = \"high\";\r\n        lowPriority.style.borderColor = \"white\";\r\n        mediumPriority.style.borderColor = \"white\";\r\n        highPriority.style.borderColor = \"black\";\r\n      }\r\n    }\r\n\r\n    lowPriority.addEventListener(\"click\", prioritySwapper);\r\n    mediumPriority.addEventListener(\"click\", prioritySwapper);\r\n    highPriority.addEventListener(\"click\", prioritySwapper);\r\n  })();\r\n\r\n  addTaskButton.addEventListener(\"click\", () => {\r\n    taskForm.style.display = \"flex\";\r\n    priority = null;\r\n  });\r\n\r\n  const taskFormAddButton = document.querySelector(\".task-form-add-button\");\r\n  const taskFormCancelButton = document.querySelector(\r\n    \".task-form-cancel-button\"\r\n  );\r\n\r\n  function closeForm(event) {\r\n    event.preventDefault();\r\n    taskForm.style.display = \"none\";\r\n  }\r\n\r\n  function loadFormElements(event) {\r\n    event.preventDefault();\r\n\r\n    const taskName = document.querySelector(\"#taskname\").value;\r\n    const taskDescription = document.querySelector(\"#taskdescription\").value;\r\n    const taskDate = document.querySelector(\"#date\").value;\r\n    const project = document.querySelector(\"#projects\").value;\r\n    const taskPriority = priority;\r\n\r\n    const task = new _task__WEBPACK_IMPORTED_MODULE_0__.CreateTask(\r\n      taskName,\r\n      taskDescription,\r\n      taskDate,\r\n      project,\r\n      taskPriority\r\n    );\r\n    (0,_task__WEBPACK_IMPORTED_MODULE_0__.addTaskToStorage)(task);\r\n    taskForm.style.display = \"none\";\r\n    console.table(_task__WEBPACK_IMPORTED_MODULE_0__.taskStorage);\r\n    (0,_display__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)();\r\n  }\r\n\r\n  taskFormAddButton.addEventListener(\"click\", loadFormElements);\r\n  taskFormCancelButton.addEventListener(\"click\", closeForm);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initTaskHandlers);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/task-handler.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateTask\": () => (/* binding */ CreateTask),\n/* harmony export */   \"addTaskToStorage\": () => (/* binding */ addTaskToStorage),\n/* harmony export */   \"removeTaskFromStorage\": () => (/* binding */ removeTaskFromStorage),\n/* harmony export */   \"taskStorage\": () => (/* binding */ taskStorage)\n/* harmony export */ });\nconst taskStorage = [];\r\n\r\nclass CreateTask {\r\n  constructor(name, description, date, project, priority) {\r\n    this.name = name;\r\n    this.description = description;\r\n    this.date = date;\r\n    this.project = project;\r\n    this.priority = priority;\r\n  }\r\n}\r\n\r\n// const example = new CreateTask(\"Clean your Room\", \"Don't forget Soap\", date, project, \"low\");\r\n\r\nconst addTaskToStorage = (task) => {\r\n  taskStorage.push(task);\r\n};\r\n\r\nconst removeTaskFromStorage = (task) => {};\r\n\r\n\r\n\r\n// Idea on how to handle task/projects. Store them in an array, and each element in the sidebar will loop through that array with the condition it calls for.\r\n\n\n//# sourceURL=webpack://to-do-list/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;