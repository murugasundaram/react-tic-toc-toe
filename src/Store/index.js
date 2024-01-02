import { configureStore } from "@reduxjs/toolkit";
import gameReducer from './game';
import modalReducer from './modal';
import resultReducer from './result';

const store = configureStore({
    reducer : {
        game : gameReducer,
        modal: modalReducer,
        result: resultReducer
    }
});

export default store;