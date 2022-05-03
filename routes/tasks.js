const express = require('express');
const route = express.Router();
const {createTask, getTasks, getTaskById, deleteTask, updateTask} = require('../controllers/tasks');

route.get('/tasks', getTasks);
route.post('/create-task', createTask);
route.get('/task/:id', getTaskById);
route.delete('/task/:id', deleteTask);
route.patch('/task/:id', updateTask);

module.exports = route;