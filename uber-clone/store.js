import {configureStore} from "@reduxjs/toolkit";
import navReducer from './slices/Slice';

export const store = configureStore({
    reducer:{
        nav: navReducer,

    },
});