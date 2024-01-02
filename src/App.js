import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import NewGame from './Pages/NewGame';
import store from './Store';
import { Provider } from 'react-redux';
import FillDetails from './Pages/FillDetails';
import GameWinner from './Pages/GameWinner';
import Scores from './Pages/Scores';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/game/details' element={<FillDetails />} />
            <Route path='/game/play' element={<NewGame />} />
            <Route path='/game/winner' element={<GameWinner />} />
            <Route path='/game/scores' element={<Scores />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
