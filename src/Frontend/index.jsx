import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "./features/memberSlice";
import languageReducer from './features/languageSlice';

export const store = configureStore({
    reducer:{
        member:memberReducer,
        lang:languageReducer,
    }
})