import React from 'react';
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './pages/Home';
import ShowMovies from './pages/ShowMovies';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<ShowMovies/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
