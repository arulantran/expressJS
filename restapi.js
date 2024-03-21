const express = require('express');
const app = express();
const port = 3000;
app.use(express.json()); // Middleware to parse JSON bodies
// Simulated in-memory "database"
let tasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true }
];
// GET all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});
// GET a specific task by ID
app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (!task) {
        return res.status(404).send('Task not found.');
    }
    res.json(task);
});
// POST create a new task
app.post('/tasks', (req, res) => {
    const task = {
        id: tasks.length + 1, // simple ID strategy
        title: req.body.title,
        completed: req.body.completed || false
    };
    tasks.push(task);
    res.status(201).json(task);
});

// PUT update an existing task by ID
app.put('/tasks/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id == req.params.id);
    if (index === -1) {
        return res.status(404).send('Task not found.');
    }
    tasks[index] = { ...tasks[index], ...req.body };
    res.json(tasks[index]);
});

// DELETE a task by ID
app.delete('/tasks/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id == req.params.id);
    if (index === -1) {
        return res.status(404).send('Task not found.');
    }
    tasks = tasks.filter(t => t.id != req.params.id);
    res.status(204).send(); // No Content
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
