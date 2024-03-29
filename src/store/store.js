import { configureStore } from '@reduxjs/toolkit';
import category from './slices/categorySlice';
import collection from './slices/collectionSlice';

export const store = configureStore({
  reducer: {
    category,
    collection,
  },
});
