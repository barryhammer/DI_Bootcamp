
const tasks = [];

// Get references to the HTML elements
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("myInput");
const listTasks = document.querySelector(".listTasks");
const errorMessage = document.getElementById("errorMessage");

// Create a new task when submitting the form
taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addTask();
});

// Function to add a new task
function addTask() {
    const inputValue = taskInput.value.trim();

    // Check if the input is empty
    if (inputValue === "") {
        errorMessage.textContent = "You must write something!";
        return;
    }

    errorMessage.textContent = "";

    // Create a new task object
    const task = {
        id: Date.now() + Math.random(),
        text: inputValue,
        done: false
    };

    // Add the task to the tasks array
    tasks.push(task);

    // Create a div for the new task
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    // Create the delete button using Font Awesome
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "close";
    deleteButton.setAttribute("aria-label", "Delete task");

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-xmark";
    deleteIcon.setAttribute("aria-hidden", "true");
    deleteButton.appendChild(deleteIcon);

    // Create the checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "taskCheckbox";

    // Create a span containing the task text
    const taskText = document.createElement("span");
    taskText.className = "taskText";
    taskText.textContent = inputValue;

    // Event listener for completing a task
    checkbox.addEventListener("change", function() {
        doneTask(task.id, checkbox.checked, taskDiv);
    });

    // Event listener for deleting a task
    deleteButton.addEventListener("click", function() {
        deleteTask(task.id, taskDiv);
    });

    // Append elements to the task div
    taskDiv.appendChild(deleteButton);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskText);

    // Append the task div to the DOM
    listTasks.appendChild(taskDiv);

    // Clear the input field
    taskInput.value = "";
    taskInput.focus();
}

// Function to mark a task as done or not done
function doneTask(taskId, isChecked, taskDiv) {
    // Find the task in the array
    const task = tasks.find(item => item.id === taskId);

    if (task) {
        // Update the task status
        task.done = isChecked;

        // Add or remove the checked CSS class
        if (isChecked) {
            taskDiv.classList.add("checked");
        } else {
            taskDiv.classList.remove("checked");
        }
    }
}

// Function to delete a task
function deleteTask(taskId, taskDiv) {
    // Find the task index in the array
    const index = tasks.findIndex(item => item.id === taskId);

    // Remove the task from the array
    if (index !== -1) {
        tasks.splice(index, 1);
    }

    // Remove the task from the DOM
    taskDiv.remove();
}
