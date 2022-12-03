const { promisify } = require("util");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

exports.comparePassword = async (fromUser, fromDb) => {
  return await bcrypt.compare(fromUser, fromDb);
};

exports.generateToken = (payload) => {
  return jwt.sign(payload, "my-secret-key", { expiresIn: "1d" });
};

exports.decodeToken = async (token) => {
  return await promisify(jwt.verify)(token, "my-secret-key");
};

exports.sendCookie = (res, token) => {
  const cookieOpt = {
    secure: true,
    httpOnly: true,
  };

  res.cookie("Authorization", token, cookieOpt);
};
