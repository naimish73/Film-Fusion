const mongoose = require("mongoose");
const axios = require("axios");

const credentials = {
  api_key: process.env.VITE_API_KEY,
  auth_domain: process.env.VITE_AUTH_DOMAIN,
};

// api calling function for axios
const options = {
  method: "GET",
  url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
  params: { limit: "5" },
  headers: {
    "X-RapidAPI-Key": "e6c0484582msh924c41763ceb674p1c7beejsnf45daed22318",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

// fetch movie data
const fetchMovieData = async (req, res) => {
  try {
    const response = await axios.request(options);
    return res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: "No movies found form the api!!!" });
  }
};

module.exports = { fetchMovieData };
