const filmsVoted = require('../films.json');

const listItems = (req, res, next) => {
  try {
    res.send(filmsVoted);
  } catch (error) {
    next(error);
  }
};

module.exports = listItems;
