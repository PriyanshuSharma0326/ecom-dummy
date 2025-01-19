import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/userSlice";
import cartReducer from "../Features/cartSlice";
import appReducer from "../Features/appSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        app: appReducer,
    },
});
