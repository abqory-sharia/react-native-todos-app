const router = require("express").Router();
const todosRouter = require("./todos-routes");

router.use("/todos", todosRouter);

module.exports = router;
