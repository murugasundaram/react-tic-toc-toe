import { useSelector } from "react-redux";
import Footer from "../Components/Game/Footer";
import Header from "../Components/Game/Header";
import MainContent from "../Components/Game/MainContent";
import { useNavigate } from "react-router-dom";
import Modal from "../Components/Modal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resultAction } from "../Store/result";

const NewGame = () => {
  const game = useSelector(state => state.game.games);
  const resGame = useSelector(state => state.result.results);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if(game && game.currentRound > game.totalRounds) { // close the game and announce winner
      gameOver();
    }
  }, [game])

  const gameOver = () => {
    let scores = game.scores;
    let players = game.players;
      
    let winner = players[0];
    let winningScore = scores[0];

    if(scores[1] > scores[0]) {
      winner = players[1];
      winningScore = scores[1];
    }

    let scoreObj = {
      winner,
      winningScore
    }

    dispatch(resultAction.postResult(scoreObj));
    storeTheScore(scoreObj);
    navigate('/game/winner');
  }

  const storeTheScore = (scoreObj) => {
    let existScore = localStorage.getItem('tic');
    let score = existScore ? JSON.parse(existScore) : [];
    score.push(scoreObj);
    localStorage.setItem('tic', JSON.stringify(score))
  }

  if(game === null) {
    alert('There is no game to play')
    navigate('/')
  }

  return <div className="game-body bg-game overflow-y-hidden">
    
        <Header game={game} />
        <MainContent game={game} />
        <Footer />
        <Modal />
  </div>
}

export default NewGame;