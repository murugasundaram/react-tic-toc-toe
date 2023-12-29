import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        games: [
            {
                p1: 'Muruga',
                p2: 'Bas',
                totalRounds: 5,
                currentRound: 1,
                rounds: [
                    { 
                        won: 'Muruga',
                        loss: 'Bas',
                        moves: {
                            p1 : [1,3,4],
                            p2 : [2,5,6]
                        },
                        playingNow: 'p1',
                        status: 'completed'
                    }
                ]
            }
        ]
    },
    reducers : {
        setName(state, action) {
            state.name = 'Bas'
        }
    }
});

export const gameAction = gameSlice.actions;
export default gameSlice.reducer;