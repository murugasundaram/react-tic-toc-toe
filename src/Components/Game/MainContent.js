import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { gameAction } from "../../Store/game";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faO, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { WinningCombo } from "../../Helpers/TableData";
import { ModalAction } from "../../Store/modal";

const MainContent = (props) => {

  const theGame = props.game ? props.game : [];
  const players = theGame && theGame.players ? theGame.players : ['', ''];
  const rounds = theGame && theGame.rounds ? theGame.rounds.filter(x => !x.isCompleted) : [];
  const currentRound = rounds ? rounds[0] : []
  const playingNow = currentRound && currentRound.playingNow ? currentRound.playingNow : 0;
  const table = useSelector(state => state.game.table);
  const dispatch = useDispatch();

  useEffect(() => {
    checkWinner();
  }, [currentRound])

  const onPlay = (index, row, column) => {
    let clickedObj = {
      index,
      row,
      column,
      gameId: theGame.id,
      roundId: currentRound.id,
      playingNow: playingNow
    }

    dispatch(gameAction.playingGame(clickedObj));
  }

  const checkWinner = () => {
    let moves = currentRound ? currentRound.moves : [[], []];
    let p1Moves = [...moves[0]];
    let p2Moves = [...moves[1]];

    p1Moves.sort((a, b) => a - b);
    p2Moves.sort((a, b) => a - b);

    let winner = null;
    let winningMove = [];

    for (let index = 0; index < WinningCombo.length; index++) {
      
      let p1Poss = true;
      let p2Poss = true;
      
      for (let newIndex = 0; newIndex < WinningCombo[index].length; newIndex++) {
        if(!p1Moves.includes(WinningCombo[index][newIndex])) {
          p1Poss = false;
        }

        if(!p2Moves.includes(WinningCombo[index][newIndex])) {
          p2Poss = false;
        }
      }

      if(p1Poss) {
        winner = 0;
        winningMove = WinningCombo[index];
      }

      if(p2Poss) {
        winner = 1;
        winningMove = WinningCombo[index];
      }
    }

    if(winner == '0' || winner == '1') {

      if(theGame.totalRounds > theGame.currentRound) {
        let winnerText = `Round ${currentRound.id} Winner is ${players[winner]}`;
        dispatch(ModalAction.setContent(winnerText));
        dispatch(ModalAction.openModal())
      }
      
      dispatch(gameAction.setWinner({ 
        gameId: theGame.id,
        roundId: currentRound.id, 
        winner: winner 
      }));
    }    
  }

  return (
    <>
      <div className="px-4 flex-1 overflow-hidden div2 m-all-center items-center">
        <table className="table-auto border-collapse game-table">
          <tbody>

            {table.map((t, i) => {
              return <tr key={i}>
                {t.map((tMin, iMin) => {
                  return <td key={iMin} onClick={() => onPlay(tMin.index, i, iMin)} className={`${tMin.class} ${tMin.whoClicked != null ? 'disabled' : ''}`}>
                    <div className="flex items-center justify-center hover:bg-blue-300">
                      {tMin.whoClicked == '0' ? <FontAwesomeIcon icon={faXmark} /> : ''}
                      {tMin.whoClicked == '1' ? <FontAwesomeIcon icon={faO} /> : ''}
                    </div>
                  </td>
                })}
              </tr>
            })}

            


          </tbody>
        </table>
      </div>

      <div className="px-4 flex-1 overflow-hidden div3 turn-div m-all-center items-center">
        <div className="player-turn player1">Its { players[playingNow] }'s turn</div>
      </div>
    </>
  );
};

export default MainContent;
