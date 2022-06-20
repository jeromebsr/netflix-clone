import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`;

export const moviesSlice = createSlice({
    name: 'movies',
    initialState : {
        data: []
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        incrementWithNumber: (state, {payload}) => {
            state.value += payload;
        },
        getPopularMovies: (state, {payload}) => {
            state.data = [payload];
        },
    },
});

// THUNKS 👇

export const reqPopularMovies = () => async (dispatch, state) => {
    try {
        const res = await axios.get(`${API_URL}`)
        .then((res) => (dispatch(getPopularMovies(res.data))))
    } catch (err) {
        throw new Error(err)
    }
}

// Selector 👇

export const getValue = (state) => state.movies.value;

export const { increment, incrementWithNumber, getPopularMovies } = moviesSlice.actions;
export default moviesSlice.reducer;