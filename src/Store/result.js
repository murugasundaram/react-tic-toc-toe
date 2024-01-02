import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
    name: 'result',
    initialState: {
        results: [
            
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