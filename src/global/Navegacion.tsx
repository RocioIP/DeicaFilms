import React from 'react';
import { Link } from 'react-router-dom';

export default function Navegacion() {
  return (
    <nav className='navHeader'>
      <Link to='/'>
        <img src='/proyectorNav.png' alt='logo' className='logo' />
      </Link>

      <Link to='/films' className='linkNav'>
        Películas
      </Link>

      <Link to='/filmsVoted' className='linkNav'>
        Películas votadas
      </Link>
    </nav>
  );
}
