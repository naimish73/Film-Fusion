const User = require("./../models/userModel");
const mongoose = require("mongoose");

const getUser = async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  try {
    const user = await User.create({ username, email, password });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getUser, createUser };
