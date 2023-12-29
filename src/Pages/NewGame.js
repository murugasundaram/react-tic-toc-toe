import Footer from "../Components/Game/Footer";
import Header from "../Components/Game/Header";
import MainContent from "../Components/Game/MainContent";

const NewGame = () => {
    return <div className="flex flex-col h-screen bg-game overflow-y-hidden">
        <Header />
        <MainContent />
        <Footer />
        {/* <header className="bg-gray-800 text-white py-4 h-35">
        Header
    </header>

    <div className="flex-1 overflow-hidden h-35">
        Content 1
    </div>

    <div className="flex-1 overflow-hidden h-25">
        Content 2
    </div>

    <footer className="bg-gray-800 text-white py-4 h-5">
        Footer
    </footer> */}
  </div>
}

export default NewGame;