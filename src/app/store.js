/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducer from '../features/movie/movieSlice';
import loginReducer from '../features/login/loginFormSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movie: movieReducer,
    loginForm: loginReducer,
  },
});
