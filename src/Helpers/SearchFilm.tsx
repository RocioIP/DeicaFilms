import apiResults from './TypeApiResults';
const apiKey = '8f781d70654b5a6f2fa69770d1d115a3';

export default function SearchFilms({ keyword = 'hola' } = {}) {
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { results = [] } = response;
      console.log(results);

      if (Array.isArray(results)) {
        const films = results.map((film: apiResults) => {
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

        return films;
      }
    });
}
