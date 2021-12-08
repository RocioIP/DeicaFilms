import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [play, setPlay] = useState<boolean>(false);
  const [nav, setNav] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setPlay(true);
    }, 1500);

    setTimeout(() => {
      setNav(true);
    }, 3000);
  }, []);
  console.log(nav);

  return (
    <>
      <section className='home'>
        <div className='conjunto'>
          <img src='proyector.png' alt='logo' className='proyector' />
          <img src='rueda1.png' alt='logo' className='rueda1' />
          <img src='rueda2.png' alt='logo' className='rueda2' />
          <h1 className='titulo'>DeicaFilms</h1>
        </div>
        {play ? <div className='cono' /> : ''}
        {nav ? (
          <nav className='navHome'>
            <Link to='/films' className='link'>
              Películas
            </Link>

            <Link to='/filmsVoted' className='link'>
              Peliculas Votadas
            </Link>
          </nav>
        ) : (
          ''
        )}
      </section>
    </>
  );
}
