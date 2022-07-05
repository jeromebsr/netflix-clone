import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        data: {
            latestMovie: {},
            popularMovie: {},
            popularTv: {},
            topRatedMovie: {},
            upcoming: {},
            movieDetails: {},
            movieImages: {},
        },
        loading: false
    },
    reducers: {
        latestMovie: (state, {payload}) => {
            state.data.latestMovie = payload.latestMovie;
        },
        popularMovie: (state, {payload}) => {
            state.data.popularMovie = payload.popularMovie;
        },
        popularTv: (state, {payload}) => {
            state.data.popularTv = payload.popularTv;
        },
        topRatedTv: (state, {payload}) => {
            state.data.topRatedTv = payload.topRatedTv;
        },
        upcomingMovies: (state, {payload}) => {
            state.data.upcomingMovies = payload.upcomingMovies;
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

/**
 * 
 * @param {String} type (eg: movie, tv...)
 * @returns 
 */
export const reqPopularMovie = () => async (dispatch, state) => {
    try {
        await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&page=1`)
        .then((res) => dispatch(popularMovie({ popularMovie: res.data.results })))

        return state().movies.popularMovie;
    } catch(err) {
        console.log(err);
    }
}

/**
 * 
 * @param {String} type (eg: movie, tv...)
 * @returns 
 */
 export const reqPopularTv = () => async (dispatch, state) => {
    try {
        await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&page=1`)
        .then((res) => dispatch(popularTv({ popularTv: res.data.results })))

        return state().movies.popularTv;
    } catch(err) {
        console.log(err);
    }
}

export const reqTopRatedTv = () => async (dispatch, state) => {
    try {
        await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&page=1`)
        .then((res) => dispatch(topRatedTv({ topRatedTv: res.data.results })))

        return state().movies.popularTv;
    }catch(err) {
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
    latestMovie, 
    upcomingMovies,
    popularMovie,
    popularTv,
    topRatedTv,
    movieDetails,
    movieImages,
 } = moviesSlice.actions;

export default moviesSlice.reducer;