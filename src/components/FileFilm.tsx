import React, { useEffect, useState } from 'react';
import { getFileFilm } from '../Helpers/Api';
import { useParams } from 'react-router';
import { ApiKey } from '../Helpers/ApiKey';
import Navegacion from '../global/Navegacion';

export default function FileFilm() {
  const [fileFilm, setFileFilm] = useState<any>();
  const { id } = useParams();

  useEffect(
    function () {
      getFileFilm(`movie/${id}?api_key=${ApiKey}`).then((fileFilm: any) =>
        setFileFilm(fileFilm)
      );
    },
    [id]
  );
  if (!fileFilm) {
    return null;
  }

  return (
    <div>
      <Navegacion />
      <section className='fileFilm'>
        <article key={fileFilm.id}>
          <img
            width={100}
            height={170}
            src={
              fileFilm.poster_path
                ? 'https://image.tmdb.org/t/p/original' + fileFilm.poster_path
                : '/rueda2.png'
            }
            alt={fileFilm.original_title}
          />

          <div>
            <h2>{fileFilm.original_title}</h2>
            <h3>Sinopsis</h3>
            <p> {fileFilm.overview}</p>
            <h4>Género </h4>
            <p>{fileFilm.genres ? fileFilm.genres[0].name : '/'}</p>
            {
              <div className='recuentoVotos'>
                <p>Nota {fileFilm.vote_average}</p>
                <p>Nº de votos {fileFilm.vote_count}</p>
              </div>
            }
            <form
              className='formVote'
              action='http://localhost:4000/add'
              method='POST'
            >
              <input
                className='tituloFormVoto'
                type='text'
                name='titulo'
                value={fileFilm.original_title}
              />
              <input name='voto' placeholder='Del 1 al 10' type='number' />

              <textarea
                name='opinion'
                placeholder='Comenta qué te pareció'
                cols={25}
                rows={8}
              />
              <input type='submit' value='Votar' className='botonVotar' />
            </form>
          </div>
        </article>
      </section>
    </div>
  );
}
