import React, { useEffect, useState } from 'react';
import getFilmsNew from '../Helpers/Api';
import Navegacion from '../global/Navegacion';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { ListDecoration1, ListDecoration2 } from '../global/ListDecoration';
import { ApiKey } from '../Helpers/ApiKey';

export default function ListFilms() {
  /*  { image }: { image: any },
  { date }: { date: Date } */
  //
  const [films, setFilms] = useState([]);
  const location = useLocation();
  console.log(location.search);

  useEffect(function () {
    getFilmsNew(
      `discover/movie?api_key=${ApiKey}&sort_by=popularity.desc&primary_release_year=2021`
    ).then((films: any) => setFilms(films));
  }, []);
  console.log(films);
  const [keyword, setKeyword] = useState<string>('');
  const [filmsSearch, setFilmsSearch] = useState([]);

  useEffect(
    function () {
      getFilmsNew(`search/movie?api_key=${ApiKey}&query=${keyword}`).then(
        (films: any) => setFilmsSearch(films)
      );
    },
    [keyword]
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(keyword);
  };

  const handleChange = (e: any) => {
    setKeyword(e.target.value);
  };

  return (
    <div className='divFilms'>
      <Navegacion />
      <div className='noved_search'>
        <h1>Novedades 2021</h1>
        <section className='divFilms'>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type='text'
              placeholder='Busca una película'
              className='inputSearch'
              value={keyword}
            />
          </form>
        </section>
      </div>
      <ListDecoration1 />
      <section className='films'>
        {keyword
          ? filmsSearch.map((singleFilm: any) => (
              <article className='pelicula' key={singleFilm.id}>
                <Link to={`/films/${singleFilm.id}`}>
                  <img
                    width={100}
                    height={170}
                    className='cartel'
                    src={singleFilm.image}
                    alt={singleFilm.title}
                  />
                </Link>
                <h3>En Cines el {singleFilm.release_date}</h3>
                <h2>{singleFilm.title}</h2>
              </article>
            ))
          : films.map((singleFilm: any) => (
              <article className='pelicula' key={singleFilm.id}>
                <Link to={`/films/${singleFilm.id}`}>
                  <img
                    width={100}
                    height={170}
                    className='cartel'
                    src={singleFilm.image}
                    alt={singleFilm.title}
                  />
                </Link>
                <h3>En Cines el {singleFilm.release_date}</h3>
                <h2>{singleFilm.title}</h2>
              </article>
            ))}
      </section>
      <ListDecoration2 />
    </div>
  );
}
