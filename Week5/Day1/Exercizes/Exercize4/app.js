import { TodoList } from "./todo.js";

const myTodoList = new TodoList();

myTodoList.addTask("Study JavaScript");
myTodoList.addTask("Practice Node.js");
myTodoList.addTask("Finish homework");

myTodoList.completeTask("Study JavaScript");

myTodoList.listTasks();