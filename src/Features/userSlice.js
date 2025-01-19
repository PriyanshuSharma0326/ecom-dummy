import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
    user: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialStateValue,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const {
    setUser,
} = userSlice.actions;

export default userSlice.reducer;
