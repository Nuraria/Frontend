import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriy: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoriy: (state, action) => {
      state.categoriy = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
