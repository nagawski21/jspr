const numberOfFilms = +prompt('Сколько фильмов вы просмотрели?')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for(let i = 1; i < 2; i++) {
    const a = prompt('Последний ваш просмотренный фильм?')
          b = prompt('На сколько баллов вы оцените этот фильм?')

    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b
        console.log('Done')
    } else {
        console.log('error')
    }

    if(personalMovieDB.count < 10) {
        console.log('Мало фильмов ты посмотрел конечно')
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Нормально так')
    } else if(personalMovieDB.count > 30) {
        console.log('Много же фильмов ты посмотрел епта')
    } else {
        console.log('error')
    }
}