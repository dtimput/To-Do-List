const initProjectHandlers = () => {
  const projectContainer = document.querySelector(".projects-container");
  const addProjectButton = document.querySelector(".addprojectbutton");
  const projectForm = document.querySelector(".add-project");
  const projectSubmitButton = document.querySelector(".project-submit-button");
  const projectCancelButton = document.querySelector(".project-cancel-button");

  function showProjectForm() {
    projectForm.style.display = "contents";
  }

  function submitProject(event) {
    event.preventDefault();
    const projectName = document.querySelector("#projectname").value;
    const project = document.createElement("div");

    project.classList.add("project-item");
    project.id = projectName;
    project.textContent = projectName;
    projectContainer.appendChild(project);

    projectForm.style.display = "none";
  }

  function cancelProject(event) {
    event.preventDefault();
    projectForm.style.display = "none";
  }

  addProjectButton.addEventListener("click", showProjectForm);
  projectSubmitButton.addEventListener("click", submitProject);
  projectCancelButton.addEventListener("click", cancelProject);
};

export default initProjectHandlers;
