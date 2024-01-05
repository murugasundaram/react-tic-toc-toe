import { createSlice } from "@reduxjs/toolkit";
import { TableData } from "../Helpers/TableData";

let newGameObj = {
    players: ['Siva', 'Mani'],
    totalRounds: 1,
    currentRound: 1,
    isCompleted: false,
    rounds: [
        {
            id: 1,
            won: '',
            loss: '',
            moves: [
                [],
                []
            ],
            playingNow: 0,
            isCompleted: false,
        }
    ],
    scores: [0, 0]
};

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        table: TableData,
        games: newGameObj
    },
    reducers : {
        playingGame(state, action) {
            let data = action.payload;
            let nxtPlay = 1;
            
            if(data.playingNow == 1) nxtPlay = 0;

            state.table[data.row][data.column].whoClicked = data.playingNow;
            state.games.rounds[(data.roundId - 1)].moves[data.playingNow].push(data.index)
            state.games.rounds[(data.roundId - 1)].playingNow = nxtPlay;
        }, 
        createNewGame(state, action) {
            state.games = action.payload.newGame
        },
        setWinner(state, action) {
            let data = action.payload;

            let looser = "1";
            let winner = "0";

            if(data.winner == "1") {
                looser = "0";
                winner = "1";
            }

            state.games.rounds[(data.roundId - 1)].won = winner;
            state.games.rounds[(data.roundId - 1)].loss = looser;
            state.games.rounds[(data.roundId - 1)].isCompleted = true;

            state.games.scores[winner] += 1;
            state.games.currentRound += 1;
            
            state.table = TableData
        }
    }
});

export const gameAction = gameSlice.actions;
export default gameSlice.reducer;