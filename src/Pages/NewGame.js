import Footer from "../Components/Game/Footer";
import Header from "../Components/Game/Header";
import MainContent from "../Components/Game/MainContent";

const NewGame = () => {
    return <div className="flex flex-col min-h-screen bg-game">
        <Header />
        <MainContent />
        <Footer />
  </div>
}

export default NewGame;