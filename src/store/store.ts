import {configureStore} from "@reduxjs/toolkit";
import cartProductsReducer from "./reducers/cartProductsReducer.ts";

export const store = configureStore({
    reducer: {
        cart: cartProductsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type dispatch = typeof store.dispatch;