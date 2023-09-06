const User = require("./../models/userModel");
const mongoose = require("mongoose");

// get all the list of users
const getUsers = async (req, res) => {
  const users = await User.find();
  console.log("getUsers is executings");

  res.status(200).json(users);
};

// get single user with id
const getUser = async (req, res) => {
  const { id } = req.params;
  console.log("get user by id: ", id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const user = await User.find({ _id: id });

  if (!user) {
    return res.status(404).json({ error: "No such workout" });
  } else {
    return res.status(200).json(user);
  }
};

// create a new user
const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  // console.log(username, email, password);

  try {
    const user = await User.create({ username, email, password });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user exists" });
  }

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(400).json({ error: "No such user exists" });
  }
  res.status(200).json({ user });
};

// update a user
const updateUser = async (req, res) => {
  const { id } = req.params;

  console.log("update user reqeust ...: ", id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user exists" });
  }

  const user = await User.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  console.log("After findByIdAndupdate in the await part...");

  if (!user) {
    return res.status(400).json({ error: "No such user exists" });
  }
  res.status(200).json({ user });
  console.log("end of the upate request in the backend...");
};

module.exports = { getUser, getUsers, createUser, deleteUser, updateUser };
