import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        data: {
            latest: {},
            popular: {},
            topRated: {},
            upcoming: {},
        },
    },
    reducers: {
        latestMovie: (state, {payload}) => {
            state.data = payload.latestMovie;
        },
        upcomingMovies: (state, {payload}) => {
            state.data = payload.upcomingMovies;
        }
    },
});

// Thunks 👇

export const reqLatestMovies = () => async (dispatch, state) => {
    try {
        await axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR}`)
        .then((res) => (dispatch(latestMovie({ latestMovie: res.data }))))

        return state().movies.latest;
    } catch (err) {
        console.log(err);
    }
}

export const reqUpcomingMovies = () => async (dispatch, state) => {
    try {
        await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&page=1`)
        .then((res) => (dispatch(upcomingMovies({ upcomingMovies: res.data.results }))))

        return state().movies.upcoming;
    } catch (err) {
        console.log(err);
    }
}

// Selector 👇

export const getMovies = (state) => state.movies.data;

// Actions 👇

export const { 
    increment, 
    incrementWithNumber, 
    latestMovie, 
    upcomingMovies
 } = moviesSlice.actions;

export default moviesSlice.reducer;