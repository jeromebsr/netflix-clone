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
            movieDetails: {},
            movieImages: {},
        },
        loading: false
    },
    reducers: {
        latestMovie: (state, {payload}) => {
            state.data = payload.latestMovie;
        },
        upcomingMovies: (state, {payload}) => {
            state.data = payload.upcomingMovies;
        },
        movieDetails: (state, {payload}) => {
            state.data.movieDetails = payload.movieDetails;
        },
        movieImages: (state, {payload}) => {
            state.data.movieImages = payload.movieImages;
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

/**
 * 
 * @param {string} type (eg: "tv" for tv show, "movie"...)
 * @param {int} id (eg: tv show or movie id)
 * @returns 
 */
export const reqMovieDetails = (type, id) => async (dispatch, state) => {
    try {
        await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`)
        .then((res) => dispatch(movieDetails({ movieDetails: res.data })))

        state.loading = true

        return state().movies.movieDetails;
    } catch (err) {
        console.log(err);
    }
}

export const reqMovieImages = (type, id) => async (dispatch, state) => {
    try {
        await axios.get(`https://api.themoviedb.org/3/${type}/${id}/images?api_key=${process.env.REACT_APP_API_KEY}`)
        .then((res) => dispatch(movieImages({ movieImages: res.data })))

        return state().movies.movieImages;
    }catch (err) {
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
    upcomingMovies,
    movieDetails,
    movieImages,
 } = moviesSlice.actions;

export default moviesSlice.reducer;