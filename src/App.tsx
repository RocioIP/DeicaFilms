import React from 'react';
import './App.css';
import ListFilms from './components/ListFilms';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './global/Home';
import FileFilm from './components/FileFilm';
import FilmsVoted from './components/FilmsVoted';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/films' element={<ListFilms />} />
        <Route path='/films/:id' element={<FileFilm />} />
        <Route path='/filmsVoted' element={<FilmsVoted />} />
      </Routes>
    </Router>
  );
}

export default App;
