import { createSlice } from "@reduxjs/toolkit";


const categorySlice = createSlice({
    name: "category",
    initialState: {
        categoriy: [],
    },
    reducers: {
        setCategoriy: (state, action) => {
            state.categoriy = action.payload;
        },
    },
})

export const { setCategory } = categorySlice.actions;