// Required array
const tasks = [];

// DOM elements
const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const listTasks = document.querySelector(".listTasks");

// Form submit
form.addEventListener("submit", function (event) {
    event.preventDefault();
    addTask();
});

function addTask() {

    const taskText = input.value.trim();

    // Don't allow empty tasks
    if (taskText === "") {
        return;
    }

    // Add to array
    tasks.push(taskText);

    // Create task container
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    // Delete button
    const deleteButton = document.createElement("i");
    deleteButton.classList.add("fa-solid", "fa-xmark");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Label
    const label = document.createElement("label");
    label.textContent = taskText;

    // Put everything together
    taskDiv.appendChild(deleteButton);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);

    // Add to page
    listTasks.appendChild(taskDiv);

    // Clear textbox
    input.value = "";

    // Delete task
    deleteButton.addEventListener("click", function () {

        taskDiv.remove();

        const index = tasks.indexOf(taskText);

        if (index !== -1) {
            tasks.splice(index, 1);
        }

    });

    // Strike through completed task
    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {
            label.style.textDecoration = "line-through";
        } else {
            label.style.textDecoration = "none";
        }

    });

}