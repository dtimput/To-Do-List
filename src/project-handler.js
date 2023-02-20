const initProjectHandlers = () => {
  const projectContainer = document.querySelector(".projects-container");
  const addProjectButton = document.querySelector(".addprojectbutton");
  const projectForm = document.querySelector(".add-project");
  projectForm.style.display = "none";
  const projectSubmitButton = document.querySelector(".project-submit-button");
  const projectCancelButton = document.querySelector(".project-cancel-button");

  function showProjectForm() {
    projectForm.style.display = "contents";
  }

  function submitProject(event) {
    event.preventDefault();

    // Add Project to Sidebar
    const projectName = document.querySelector("#projectname").value;
    const project = document.createElement("div");

    project.classList.add("project-item");
    project.id = projectName;
    project.textContent = projectName;
    projectContainer.appendChild(project);

    const deleteProject = document.createElement("img");
    deleteProject.src = "img/delete.png";
    deleteProject.classList.add("delete-project");
    project.appendChild(deleteProject);

    // Add Project to Task Form
    const projectList = document.querySelector("#projects");
    const projectListElement = document.createElement("option");
    projectListElement.textContent = projectName;
    projectList.appendChild(projectListElement);

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
