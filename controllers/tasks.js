const Task = require('../models/Task');
const asyncWrapper = require('../middlewares/async');
const { createError } = require('../errors/CustomApiError');

const createTask = asyncWrapper(async (req, res) => {
  const task = Task.create(req.body);
  res.status(201).json({ success: true, task: task })
})


const getTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ success: true, tasks })
})


const getTaskById = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) return next(createError(`No record found with id: ${taskID}`, 404))
  
  res.status(200).json({ success: true, task })
})


const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) return next(createError(`No record found to delete with id: ${taskID}`, 404))

  res.status(200).json({success: true, task})
})


const updateTask = asyncWrapper(async (req, res, next) => { 
  const {id: taskID} = req.params;
  const task = await Task.findOneAndUpdate({_id: taskID}, req.body,{new: true, runValidators: true});

  if(!task) return next(createError(`No record found to update with id: ${taskID}`, 404));  

  res.status(200).json({success: true, task});
})

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  deleteTask,
  updateTask
}


