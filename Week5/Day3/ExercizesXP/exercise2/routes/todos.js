
const express = require('express');
const router = express.Router();

const todos = [];
let nextId = 1;

// GET - Retrieve all todos
router.get('/', (req, res) => {
    res.json(todos);
});

// POST - Add a new todo
router.post('/', (req, res) => {
    const { task } = req.body;

    if (!task) {
        return res.status(400).json({ error: 'Task is required' });
    }

    const newTodo = {
        id: nextId++,
        task: task,
        completed: false
    };

    todos.push(newTodo);

    res.status(201).json(newTodo);
});

// PUT - Update a todo
router.put('/:id', (req, res) => {
    const id = Number(req.params.id);

    const todo = todos.find(item => item.id === id);

    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    const { task, completed } = req.body;

    if (task !== undefined) {
        todo.task = task;
    }

    if (completed !== undefined) {
        todo.completed = completed;
    }

    res.json(todo);
});

// DELETE - Remove a todo
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);

    const index = todos.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    const deletedTodo = todos.splice(index, 1);

    res.json({
        message: 'Todo deleted successfully',
        todo: deletedTodo[0]
    });
});

module.exports = router;
