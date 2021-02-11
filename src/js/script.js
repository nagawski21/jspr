const numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?')
console.log(numberOfFilms)

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: numberOfFilms == null
}

const a = prompt('Один из последних просмотренных фильмов?', '')
      b = prompt('На сколько оцените его?', '')
personalMovieDB.movies[a] = b

console.log(personalMovieDB)