
const tasks = [];

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const listTasks = document.querySelector(".listTasks");

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        input.style.border = "2px solid red";
        return;
    }

    input.style.border = "";

    const task = {
        text: taskText,
        done: false
    };

    tasks.push(task);

    const taskDiv = document.createElement("div");

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("span");
    label.textContent = task.text;

    deleteBtn.addEventListener("click", () => {
        deleteTask(task, taskDiv);
    });

    checkbox.addEventListener("change", () => {
        doneTask(task, checkbox, label);
    });

    taskDiv.appendChild(deleteBtn);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);

    listTasks.appendChild(taskDiv);

    input.value = "";
}

function doneTask(task, checkbox, label) {
    task.done = checkbox.checked;

    if (task.done) {
        label.style.textDecoration = "line-through";
    } else {
        label.style.textDecoration = "none";
    }
}

function deleteTask(task, taskDiv) {
    const index = tasks.indexOf(task);

    if (index !== -1) {
        tasks.splice(index, 1);
    }

    taskDiv.remove();
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    addTask();
});
