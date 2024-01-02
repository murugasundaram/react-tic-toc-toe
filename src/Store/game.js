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
        },
        setWinner(state, action) {
            let data = action.payload;

            let looser = "1";
            let winner = "0";

            if(data.winner == "1") {
                looser = "0";
                winner = "1";
            }

            state.games[(data.gameId - 1)].rounds[(data.roundId - 1)].won = winner;
            state.games[(data.gameId - 1)].rounds[(data.roundId - 1)].loss = looser;
            state.games[(data.gameId - 1)].rounds[(data.roundId - 1)].isCompleted = true;

            state.games[(data.gameId - 1)].scores[winner] += 1;
            state.games[(data.gameId - 1)].currentRound += 1;
            
            state.table = TableData
        }
    }
});

export const gameAction = gameSlice.actions;
export default gameSlice.reducer;