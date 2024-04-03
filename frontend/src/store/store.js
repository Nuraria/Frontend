import { configureStore } from '@reduxjs/toolkit';
import category from './slices/categorySlice';
import collection from './slices/collectionSlice';
import closeSlice from './slices/closeSlice';

export const store = configureStore({
  reducer: {
    category,
    collection,
    closeSlice,
  },
});
