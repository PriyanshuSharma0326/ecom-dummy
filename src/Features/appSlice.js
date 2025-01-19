import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
    selectedCategory: null,
}

const appSlice = createSlice({
    name: 'app',
    initialState: initialStateValue,
    reducers: {
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const {
    selectCategory,
} = appSlice.actions;

export default appSlice.reducer;
