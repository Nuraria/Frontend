import { configureStore } from "@reduxjs/toolkit";
import { category } from "./CategorySlice";
import { collection } from "./CollectionSlice";

export const store = configureStore({
  reducer: {
    category,
    collection,
  },
});
