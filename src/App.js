import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import NewGame from './Pages/NewGame';
import store from './Store';
import { Provider } from 'react-redux';
import FillDetails from './Pages/FillDetails';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/game/details' element={<FillDetails />} />
            <Route path='/game/play' element={<NewGame />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
