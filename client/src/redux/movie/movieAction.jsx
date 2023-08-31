import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const baseURL = 'https://api.themoviedb.org'
const credentials = {
    api_key: import.meta.env.VITE_API_KEY,
    auth_domain: import.meta.env.VITE_AUTH_DOMAIN,
}

export const fetchMovieData = createAsyncThunk('fetchMovieData',
    async(_, { rejectWithValue }) => {
        try {
            const res = await axios.get(`${baseURL}/3/trending/all/day`, {
                headers: {
                    'Authorization': `Bearer ${credentials.auth_domain}`,
                },
            })
            return res.data
        } catch(error) {
            return  rejectWithValue(error.message)
        }
    }
)