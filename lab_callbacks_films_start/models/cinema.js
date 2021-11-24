const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getTitles = function(){
  let filmTitles = this.films.map(film => film.title)
  return filmTitles;
}
module.exports = Cinema;


Cinema.prototype.findFilm = function(title){
  const found = this.films.find(film => film.title === title);
  return found;
}

Cinema.prototype.filmsByGenre = function(genre) {
  const found = this.films.filter(film => film.genre === genre);
  return found;
}

Cinema.prototype.filmByYear = function(year) {
  const found = this.films.some(film => film.year === year);
  return found;
}

Cinema.prototype.lenghtyFilms = function(length) {
  const found = this.films.every(film => film.length > length);
  return found;
}

Cinema.prototype.totalTime = function() {
  let filmLengths = this.films.map(film => film.length)
  const total = filmLengths.reduce((total, time) => total += time);
  return total;
}

Cinema.prototype.filmsByProperty = function(property, value) {
  const found = this.films.filter(film => film[property] === value);
  return found;
}