import { createSlice } from "@reduxjs/toolkit";

// importing actions
import { fetchMovieData } from "./movieAction";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        data: [],
        isLoading: false,
        isSuccess: null,
        errorMessage: ''
    },
    reducers: {},
    extraReducers: {
        [fetchMovieData.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = null
            state.errorMessage = ''
            state.data = []
        },
        [fetchMovieData.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.data = action.payload
        },
        [fetchMovieData.rejected]: (state, action) => {  
            state.isLoading = false
            state.isSuccess = false
            state.errorMessage = action.payload
            state.data = []
        }
    }
})

export default movieSlice.reducer