
const express = require('express');
const router = express.Router();

const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../tasks.json');

// Read tasks from JSON file
const readTasks = async () => {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
};

// Write tasks to JSON file
const writeTasks = async (tasks) => {
    await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
};

// GET - Retrieve all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await readTasks();
        res.json(tasks);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to read tasks' });
    }
});

// GET - Retrieve a task by ID
router.get('/:id', async (req, res) => {
    try {
        const tasks = await readTasks();
        const id = Number(req.params.id);

        const task = tasks.find(item => item.id === id);

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.json(task);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to read task' });
    }
});

// POST - Create a new task
router.post('/', async (req, res) => {
    try {
        const { title, description } = req.body;

        if (typeof title !== 'string' || !title.trim()) {
            return res.status(400).json({
                error: 'Task title is required'
            });
        }

        const tasks = await readTasks();

        const newTask = {
            id: tasks.length > 0
                ? Math.max(...tasks.map(task => task.id)) + 1
                : 1,
            title: title.trim(),
            description: description || '',
            completed: false
        };

        tasks.push(newTask);

        await writeTasks(tasks);

        res.status(201).json(newTask);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to create task' });
    }
});

// PUT - Update an existing task
router.put('/:id', async (req, res) => {
    try {
        const tasks = await readTasks();
        const id = Number(req.params.id);

        const task = tasks.find(item => item.id === id);

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        const { title, description, completed } = req.body;

        if (title !== undefined) {
            if (typeof title !== 'string' || !title.trim()) {
                return res.status(400).json({
                    error: 'Title must be a non-empty string'
                });
            }
            task.title = title.trim();
        }

        if (description !== undefined) {
            if (typeof description !== 'string') {
                return res.status(400).json({
                    error: 'Description must be a string'
                });
            }
            task.description = description;
        }

        if (completed !== undefined) {
            if (typeof completed !== 'boolean') {
                return res.status(400).json({
                    error: 'Completed must be true or false'
                });
            }
            task.completed = completed;
        }

        if (title === undefined &&
            description === undefined &&
            completed === undefined) {
            return res.status(400).json({
                error: 'No valid fields provided'
            });
        }

        await writeTasks(tasks);

        res.json(task);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to update task' });
    }
});

// DELETE - Remove a task by ID
router.delete('/:id', async (req, res) => {
    try {
        const tasks = await readTasks();
        const id = Number(req.params.id);

        const index = tasks.findIndex(item => item.id === id);

        if (index === -1) {
            return res.status(404).json({ error: 'Task not found' });
        }

        const deletedTask = tasks.splice(index, 1);

        await writeTasks(tasks);

        res.json({
            message: 'Task deleted successfully',
            task: deletedTask[0]
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to delete task' });
    }
});

module.exports = router;
