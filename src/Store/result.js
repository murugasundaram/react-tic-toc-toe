import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
    name: 'result',
    initialState: {
        results: [
            {winner: 'Muruga', winningScore: 3}, {winner: 'Baskaran', winningScore: 5}
        ]
    },
    reducers: {
        postResult(state, action) {
            state.results.push(action.payload);
        }
    }
});

export default resultSlice.reducer;
export const resultAction = resultSlice.actions;