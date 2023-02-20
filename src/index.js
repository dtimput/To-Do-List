import initProjectHandlers from "./project-handler";
import initTaskHandlers from "./task-handler";
import { initSideBar } from "./display";

initProjectHandlers();
initTaskHandlers();
initSideBar();
console.log("all elements loaded");
