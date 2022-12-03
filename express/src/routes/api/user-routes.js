const router = require("express").Router();

const { register, login } = require("../../auth/auth");

router.post("/registration", register);
router.post("/login", login);

module.exports = router;
