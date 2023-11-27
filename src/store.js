import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "./slices/counterSlice";
import jsonApiReducer from "./slices/jsonApiSlice";
import cartReducer from './slices/cartSlice';
import modalReducer from './slices/modalSlice'

export const store = configureStore({
    reducer : {
        counter: counterReducer,
        jsonApi: jsonApiReducer,
        cart: cartReducer,
        modal: modalReducer,
     }
})