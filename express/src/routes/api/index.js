const router = require("express").Router();
const todosRouter = require("./todos-routes");
const userRouter = require("./user-routes");

router.use("/todos", todosRouter);
router.use("/user", userRouter);

module.exports = router;
