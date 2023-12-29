import { configureStore } from "@reduxjs/toolkit";
import gameReducer from './game';
import modalReducer from './modal';

const store = configureStore({
    reducer : {
        game : gameReducer,
        modal: modalReducer
    }
});

export default store;