/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  movies: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState: INITIAL_STATE,
  reducers: {
    setMovies: (state, action) => {
      state.movies = [...action.payload];
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;
