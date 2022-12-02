const Todos = require("../models/todos");
const User = require("../models/user");

exports.getTodos = (req, res, next) => {
  Todos.findAll({
    attributes: ["id", "job", "done", "description"],
    // include: [
    //   {
    //     model: User,
    //     attributes: ["id"],
    //   },
    // ],
  })
    .then((todo) => {
      if (!todo) {
        res.status(404).json({ message: "You didn't have any todos" });
      }
      res.json(todo);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

exports.createTodo = (req, res, next) => {
  Todos.create({
    job: req.body.job,
  });
};

exports.updateTodo = (req, res, next) => {
  Todos.update(req.body, {
    where: {
      id: req.body.id,
    },
  });
};

exports.deleteTodo = (req, res, next) => {
  Todos.destroy({
    where: {
      id: req.body.id,
    },
  }).then((todo) => {
    if (!todo) {
      res.status(404).json({ message: "No Product Found by this id!" });
    }
    res.json(todo);
  });
};
