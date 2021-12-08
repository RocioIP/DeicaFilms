require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Controllers.
const addFilmVoted = require('./controllers/addFilmVoted');
const listFilmVoted = require('./controllers/listFilmVoted');

const PORT = 4000;

const app = express();

app.use(express.urlencoded());
app.use(cors());

// Obtener peliculas votadas.
app.get('/filmsVoted', listFilmVoted);

// añadir una pelicula votada.
app.post('/add', addFilmVoted);

// Middleware de error.
app.use((error, req, res, _) => {
  console.log(error);
  res.status(error.httpStatus || 500).send({
    status: 'error',
    message: error.message,
  });
});

// Middleware de no encontrado.
app.use((req, res) => {
  res.status(404).send({
    status: 'error',
    message: 'Not found',
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
