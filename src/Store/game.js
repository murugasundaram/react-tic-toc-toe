import { createSlice } from "@reduxjs/toolkit";
import { TableData } from "../Helpers/TableData";



const gameSlice = createSlice({
    name: 'game',
    initialState: {
        table: TableData,
        games: []
    },
    reducers : {
        playingGame(state, action) {
            let data = action.payload;
            let nxtPlay = 1;
            
            if(data.playingNow == 1) nxtPlay = 0;

            state.table[data.row][data.column].whoClicked = data.playingNow;
            state.games[(data.gameId - 1)].rounds[(data.roundId - 1)].moves[data.playingNow].push(data.index)
            state.games[(data.gameId - 1)].rounds[(data.roundId - 1)].playingNow = nxtPlay;
        }, 
        createNewGame(state, action) {
            state.games.push(action.payload.newGame)
        }
    }
});

export const gameAction = gameSlice.actions;
export default gameSlice.reducer;