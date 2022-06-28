import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const tvSlice = createSlice({
    name: 'tv',
    initialState: {
        data: {
            popularTv: {},
        },
        loading: false
    },
    reducers: {
        popularTv: (state, {payload}) => {
            state.data.popularTv = payload.popularTv;
        },
    },
});

// Thunks 👇

export const reqPopularTv = () => async (dispatch, state) => {
    try {
        await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then((res) => dispatch(popularTv({ popularTv: res.data.results })))

        return state().tv.popularTv;
    } catch(err) {
        console.log(err);
    }
}

// Selector 👇

export const getTv = (state) => state.tv.data;

// Actions 👇

export const {  
    popularTv,
 } = tvSlice.actions;

export default tvSlice.reducer;