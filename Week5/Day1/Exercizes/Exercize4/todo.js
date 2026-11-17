export class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(taskName) {
        this.tasks.push({
            name: taskName,
            completed: false
        });
    }

    completeTask(taskName) {
        const task = this.tasks.find(
            task => task.name === taskName
        );

        if (task) {
            task.completed = true;
        }
    }

    listTasks() {
        this.tasks.forEach(task => {
            console.log(
                `${task.name} - ${task.completed ? "Complete" : "Incomplete"}`
            );
        });
    }
}