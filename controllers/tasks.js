//This file represents the functions of a route
const Task = require("../models/Task");
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks }); //{} for all
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
  }
};
const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
  // res.json({ id: req.params.id });
};
const deleteTask = async (req, res) => {
  try {
    const task = await Task.deleteOne({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    }); //update by default doesnt run validators while updating, we have to provide the third argument as shown
    res.status(200).json({ id: req.params.id, data: req.body });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
