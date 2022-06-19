import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig } from "axios";
import { RootState } from '../app/store';
export interface moviesSlice {
    value: number;
    movies: [];
}

export interface AxiosResponse<T = never>  {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
    config: AxiosRequestConfig<T>;
    request?: any;
}
  
const initialState: moviesSlice = {
    value: 0,
    movies: [],
};

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,

    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        incrementWithNumber: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        getPopularMovies: (state, action: PayloadAction<[]>) => {
            state.movies = action.payload;
        },
    },
});

// THUNKS 👇

export const reqPopularMovies = () => async (dispatch:any, state:any) => {
    axios.get<AxiosResponse>("https://api.themoviedb.org/3/movie/popular?api_key=5a908f83d771f625cf7b5886d78aebdd&language=fr-FR&page=1")
    .then((res) => (dispatch(getPopularMovies(res.data))))
}

// Selector 👇

export const getValue = (state: RootState) => state.movies.value;

export const { increment, incrementWithNumber, getPopularMovies } = moviesSlice.actions;
export default moviesSlice.reducer;