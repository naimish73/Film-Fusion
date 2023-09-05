import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://api.themoviedb.org";
const credentials = {
  api_key: import.meta.env.VITE_API_KEY,
  auth_domain: import.meta.env.VITE_AUTH_DOMAIN,
};

const options = {
  method: "GET",
  url: "https://moviesdatabase.p.rapidapi.com/titles/utils/genres",
  headers: {
    "X-RapidAPI-Key": "e6c0484582msh924c41763ceb674p1c7beejsnf45daed22318",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

export const fetchMovieData = createAsyncThunk(
  "fetchMovieData",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.request(options);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
