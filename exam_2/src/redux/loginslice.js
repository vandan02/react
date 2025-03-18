import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isActive: false,
};
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    toggleReducer: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { toggleReducer } = loginSlice.actions;

export default loginSlice.reducer;

