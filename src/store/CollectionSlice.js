import { createSlice } from "@reduxjs/toolkit";


const collectionSlice = createSlice({
    name: "collection",
    initialState: {
        collection: []
    },
    reducers: {
        setCollection: (state, action) => {
            state.collection = action.payload;
        }
    }
})

export const { setCollection } = collectionSlice.actions;