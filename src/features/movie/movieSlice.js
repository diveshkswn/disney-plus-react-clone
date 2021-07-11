/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  movies: [],
  currentMovie: {},
};

const movieSlice = createSlice({
  name: 'movie',
  initialState: INITIAL_STATE,
  reducers: {
    setMovies: (state, action) => {
      state.movies = [...action.payload];
    },
    setCurrentMovie: (state, action) => {
      state.currentMovie = action.payload;
    },
  },
});

export const { setMovies, setCurrentMovie } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;
