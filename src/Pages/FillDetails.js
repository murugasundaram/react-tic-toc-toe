import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { newGameObj } from "../Helpers/TableData";
import { singleRound } from "../Helpers/TableData";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { gameAction } from "../Store/game";

const FillDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [p1, setP1] = useState("");
    const [p2, setP2] = useState("");
    const [rounds, setRounds] = useState('3')

    const [p1Error, setP1Error] = useState(false);
    const [p2Error, setP2Error] = useState(false);
    const game = useSelector(state => state.game.games)

    const playNow = () => {
      if(p1 === "") {
        setP1Error(true)
      }

      if(p2 === "") {
        setP2Error(true)
      }

      if(p1 === "" || p2 === "") {
        return
      } 

      //let newGame = { ...newGameObj };
      var newGame = Object.assign({}, newGameObj);
      console.log('newGame', newGame)
      newGame.id = game.length + 1;
      newGame.players[0] = p1;
      newGame.players[1] = p2;
      newGame.totalRounds = parseInt(rounds);
      
      for (let i = 0; i < newGame.totalRounds; i++) {
        let round = { ...singleRound };
        round.id = i+1;

        newGame.rounds.push(round);
      }

      dispatch(gameAction.createNewGame({newGame}));
      navigate('/game/play')
    }

    return <div className="h-screen bg-game overflow-y-hidden player-details-div flex flex-col justify-center items-center">
    
    <div className="mb-6">
        <h2 className="text-white text-center text-lg">Players details</h2>
    </div>

    <div className="w-full mb-4">
      <label htmlFor="firstInput" className="block text-sm font-medium player-name">
        Name of Player 1
      </label>
      <input
        type="text"
        id="firstInput"
        value={p1}
        onChange={(event) => {setP1(event.target.value); setP1Error(false)}}
        className={`w-full ${p1Error ? 'error' : ''} p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 player-details-input`}
      />
    </div>
  
    <div className="w-full mb-4">
      <label htmlFor="secondInput" className="block text-sm font-medium player-name">
      Name of Player 2
      </label>
      <input
        type="text"
        id="secondInput"
        value={p2}
        onChange={(event) => {setP2(event.target.value); setP2Error(false)}}
        className={`w-full ${p2Error ? 'error' : ''} p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 player-details-input`}
      />
    </div>
  
    <div className="w-full mb-4">
      <label htmlFor="dropdown" className="block text-sm font-medium player-name">
        Number of Rounds
      </label>
      <select 
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 player-details-input"
        value={rounds}
        onChange={(event) => setRounds(event.target.value)}
      >
        <option value="1">One</option>
        <option value="3">Three</option>
        <option value="5">Five</option>
      </select>
    </div>
  
    <div className="flex items-center justify-center bg-game overflow-y-hidden" style={{ marginTop: '30px' }}>
        <button className="px-3 py-2 bg-black text-white rounded-md mr-4" onClick={() => navigate('/')}>Back</button>
        <button className="px-3 py-2 bg-yellow-500 text-black rounded-md" onClick={playNow}>Play Now</button>
    </div>
  </div>
  
  
}

export default FillDetails;