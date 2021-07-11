/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  value: false,
};

const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState: INITIAL_STATE,
  reducers: {
    setLoginForm: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setLoginForm } = loginFormSlice.actions;

export default loginFormSlice.reducer;
