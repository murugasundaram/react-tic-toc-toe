import Footer from "../Components/Game/Footer";
import Header from "../Components/Game/Header";
import MainContent from "../Components/Game/MainContent";

const NewGame = () => {
    return <div className="game-body bg-game overflow-y-hidden">
        <Header />
        <MainContent />
        <Footer />
  </div>
}

export default NewGame;