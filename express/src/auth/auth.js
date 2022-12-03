const sequelize = require("../config/database");
const User = require("../models/user");
const {
  comparePassword,
  generateToken,
  hashPassword,
  decodeToken,
  sendCookie,
} = require("./security/security");

exports.register = async (req, res) => {
  const duplicate = await User.findOne({ where: { email: req.body.email } });

  if (duplicate) {
    res.status(404).json({ message: "email is exist" });
  }

  req.body.password = await hashPassword(req.body.password);

  let user = await User.create(req.body);

  const accesToken = generateToken({ id: user.id });

  user = user.toJSON();
  delete user.password;

  // send token as http-cookie
  sendCookie(res, accesToken);

  return res.status(200).json({
    message: "succes",
    user,
    accesToken,
  });
};

exports.login = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });

  if (!user) {
    res.status(404).json({ message: "wrong email or password" });
  }

  const compare = await comparePassword(req.body.password, user.password);

  if (!compare) {
    res.status(404).json({ message: "wrong email or password" });
  }

  const accesToken = generateToken({ id: user.id });

  user = user.toJSON();
  delete user.password;

  sendCookie(res, accesToken);

  return res.status(200).json({ message: "succes", user, accesToken });
};
