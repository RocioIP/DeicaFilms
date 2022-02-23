import React, { useEffect, useState } from 'react';
import { getFilmsVoted } from '../Helpers/Api';
import Navegacion from '../global/Navegacion';

export default function Filmsvoted() {
  const [films, setFilms] = useState([]);

  useEffect(function () {
    getFilmsVoted('http://localhost:4000/filmsVoted').then((films: any) =>
      setFilms(films)
    );
  }, []);
  console.log(films);

  return (
    <div className='divFilmsVoted'>
      <Navegacion />

      <section className='SecFilmVoted'>
        {films.map((singleFilm: any) => (
          <article className='filmVoted' key={singleFilm.id}>
            <img
              width={100}
              height={150}
              className='cartel'
              src='/proyectorNav.png'
              alt={singleFilm.titulo}
            />
            <div>
              <h2>{singleFilm.titulo}</h2>
              <h3 className='myVotacion'>{singleFilm.votacion}</h3>
              <p className='pFilmVoted'>{singleFilm.opinion}</p>
            </div>
          </article>
        ))}
      </section>
      <section className='SecFilmVoted'></section>
    </div>
  );
}
