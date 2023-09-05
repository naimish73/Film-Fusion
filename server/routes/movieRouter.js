const express = require("express");
const { fetchMovieData } = require("../controllers/movieController");

const router = express.Router();

router.get("/", fetchMovieData);

module.exports = router;
