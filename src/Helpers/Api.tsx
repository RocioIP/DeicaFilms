import apiResults from './TypeApiResults';

const Api = `https://api.themoviedb.org/3/`;

export default function getFilmsNew(path: string) {
  const apiUrl = Api + path;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { results = [] } = response;
      console.log(results);
      const pelis = results.slice(0, 6);
      console.log(pelis);

      if (Array.isArray(pelis)) {
        const films = pelis.map((film: apiResults) => {
          const {
            title,
            poster_path,
            release_date,
            id,
            overview,
            vote_average,
            vote_count,
          } = film;
          let image = '';
          {
            poster_path === null
              ? (image = '/rueda2.png')
              : (image = `https://image.tmdb.org/t/p/original${poster_path}`);
          }
          return {
            title,
            release_date,
            image,
            id,
            overview,
            vote_average,
            vote_count,
          };
        });
        console.log(films);

        return films;
      }
    });
}

export const getFileFilm = (path: string) => {
  const apiUrl = Api + path;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const file = response;

      return file;
    });
};

export const getFilmsVoted = (url: string) => {
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const { filmsVoted = [] } = response;
      if (Array.isArray(filmsVoted)) {
        const films = filmsVoted.map((filmVoted: any) => {
          const { id, imagen, titulo, opinion, votacion } = filmVoted;
          return {
            id,
            imagen,
            titulo,
            opinion,
            votacion,
          };
        });
        console.log(films);

        return films;
      }
    });
};

export const postFilmVoted = (url: string, body: any) => {
  console.log('hola' + body);

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((response) => {
      const file = response.data;
      console.log('hola' + file);

      return file;
    });
};
