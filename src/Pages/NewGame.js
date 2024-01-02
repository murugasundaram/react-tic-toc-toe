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

  const filterGame = game.filter(x => !x.isCompleted);
  const currentGame = filterGame ? filterGame[0] : null;


  useEffect(() => {
    if(currentGame && currentGame.currentRound > currentGame.totalRounds) { // close the game and announce winner
      gameOver();
    }
  }, [currentGame])

  const gameOver = () => {
    let scores = currentGame.scores;
    let players = currentGame.players;
      
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
    console.log(score)
    score.push(scoreObj);
    console.log(score)
    localStorage.setItem('tic', JSON.stringify(score))
  }

  if(currentGame === null) {
    alert('There is no game to play')
    navigate('/')
  }

  return <div className="game-body bg-game overflow-y-hidden">
    
        <Header game={currentGame} />
        <MainContent game={currentGame} />
        <Footer />
        <Modal />
  </div>
}

export default NewGame;