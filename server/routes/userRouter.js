const express = require("express");
const { getUsers, createUser } = require("../controllers/userController");

const router = express.Router();

// get all the user
router.get("/", getUsers);

// create a new user
router.post("/", createUser);

// get single user based on id
// router.get("/:id", getUser);

module.exports = router;
