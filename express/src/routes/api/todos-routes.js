const router = require("express").Router();
const {
  getTodos,
  updateTodo,
  deleteTodo,
  createTodo,
} = require("../../controllers/todos");

router.get("/", getTodos);

router.post("/create-todo", createTodo);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);

module.exports = router;
