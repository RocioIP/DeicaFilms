const path = require('path');
const uuid = require('uuid');
const fs = require('fs').promises;
const datos = require('../films.json');

const filmsVotedPath = path.join(__dirname, '../films.json');

const addFilmVoted = async (req, res, next) => {
  try {
    const { titulo, voto, opinion } = await req.body;

    const newFilm = {
      titulo: titulo,
      votacion: voto,
      opinion: opinion,
    };

    datos.filmsVoted.push(newFilm);
    await fs.writeFile(filmsVotedPath, JSON.stringify(datos));

    res.send({
      status: 'ok',
      message: 'Película añadida',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addFilmVoted;
