//This file represents the functions of a route
const Task = require("../models/Task");
const getAllTasks = (req, res) => {
  res.send("all Itemms");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
  }
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {};
const deleteTask = (req, res) => {};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
