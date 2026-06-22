function createProject() {
    let projectName = document.getElementById("projectName").value;

    if(projectName === "") {
        alert("Please enter a project name");
        return;
    }

    let project = document.createElement("div");
    project.innerHTML = "<h3>" + projectName + "</h3>";

    document.getElementById("projects").appendChild(project);

    document.getElementById("projectName").value = "";
}
function addTask() {
    let taskName = document.getElementById("taskName").value;

    if(taskName === "") {
        alert("Please enter a task");
        return;
    }

    let task = document.createElement("div");
    let deadline = document.getElementById("deadline").value;

task.innerHTML = "<p>" + taskName + " - Deadline: " + deadline + "</p>";
    document.getElementById("tasks").appendChild(task);

    document.getElementById("taskName").value = "";
}
function trackProgress() {
    let totalTasks = document.getElementById("tasks").children.length;

    document.getElementById("progress").innerText =
        "Total Tasks: " + totalTasks;
}