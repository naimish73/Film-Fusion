import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovieData = createAsyncThunk(
  "fetchMovieData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://127.0.0.1:4000/fetchMovieData");
      console.log("api call successful: ", response.data);
      return response.data;
    } catch (error) {
      console.log("api call failed: ", error.message);
      return rejectWithValue(error.message);
    }
  }
);
