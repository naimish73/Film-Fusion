const User = require("./../models/userModel");
// const mongoose = require("mongoose");

const getUser = async (req, res) => {
  const users = await User.find({}).sort();

  res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({ username, email, body });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getUser, createUser };
