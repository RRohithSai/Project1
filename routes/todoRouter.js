const express = require("express");
const {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  patchTodo,
  deleteTodo,
} = require("../controller/todoController");

const router = express.Router();

router.get("/", getTodos);
router.get("/:id", getTodoById);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.patch("/:id", patchTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
