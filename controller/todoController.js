const Todo = require("../models/todoModel");

// GET al
const getTodos = async (req, res) => {
  try {
    const to = await Todo.find();
    res.json(to);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET todo by ID
const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
    console.log(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create new todo
const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodo = new Todo({ title, description });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update todo
const updateTodo = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, description, completed },
      { new: true, runValidators: true }
    );
    if (!updatedTodo) return res.status(404).json({ message: "Todo not found" });
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PATCH update fields
const patchTodo = async (req, res) => {
  try {
    const patchedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!patchedTodo) return res.status(404).json({ message: "Todo not found" });
    res.json(patchedTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE todo
const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) return res.status(404).json({ message: "Todo not found" });
    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  patchTodo,
  deleteTodo,
};
