//This file represents the functions of a route
const getAllTasks = (req, res) => {
  res.send("all Itemms");
};

const createTask = (req, res) => {
  res.json(req.body);
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {};
const deleteTask = (req, res) => {};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
