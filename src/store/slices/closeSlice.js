import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  closeValue: false,
};

const closeSlice = createSlice({
  name: 'close',
  initialState,
  reducers: {
    setClose: (state, action) => {
      state.closeValue = action.payload;
    },
  },
});

export const { setClose } = closeSlice.actions;

export default closeSlice.reducer;
