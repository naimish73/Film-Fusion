const express = require("express");
const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

// get all the user
router.get("/", getUsers);

// get single user based on id
router.get("/:id", getUser);

// create a new user
router.post("/", createUser);

// delete user
router.delete("/:id", deleteUser);

// update user
router.patch("/:id", updateUser);

module.exports = router;
