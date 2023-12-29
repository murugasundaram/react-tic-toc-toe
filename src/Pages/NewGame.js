import { useSelector } from "react-redux";
import Footer from "../Components/Game/Footer";
import Header from "../Components/Game/Header";
import MainContent from "../Components/Game/MainContent";
import { useNavigate } from "react-router-dom";
import Modal from "../Components/Modal";

const NewGame = () => {
  const game = useSelector(state => state.game.games);
  const navigate = useNavigate();

  const filterGame = game.filter(x => !x.isCompleted);
  const currentGame = filterGame ? filterGame[0] : null;

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