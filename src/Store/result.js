import { createSlice } from "@reduxjs/toolkit";

let scores = localStorage.getItem('tic');
let setScores = scores ? JSON.parse(scores) : [];

const resultSlice = createSlice({
    name: 'result',
    initialState: {
        results: setScores
    },
    reducers: {
        postResult(state, action) {
            state.results.push(action.payload);
        },
        clearResult(state) {
            state.results = []
        }
    }
});

export default resultSlice.reducer;
export const resultAction = resultSlice.actions;