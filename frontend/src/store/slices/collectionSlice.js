import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  collection: [],
};

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    setCollection: (state, action) => {
      state.collection = action.payload;
    },
  },
});

export const { setCollection } = collectionSlice.actions;

export default collectionSlice.reducer;
