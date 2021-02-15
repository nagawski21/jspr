let numberOfFilms

function start() {
    numberOfFilms = prompt('Сколько фильмов вы просмотрели?', '')

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы просмотрели?', '')
    }
}

start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    for(let i = 1; i < 2; i++) {
        const a = prompt('Последний ваш просмотренный фильм?')
              b = prompt('На сколько баллов вы оцените этот фильм?')
    
        if(a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b
            console.log('Done')
        } else {
            console.log('error')
        }
    }
}

rememberMyFilms()

function detectPeronalLevel() {
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

detectPeronalLevel()

function showMyDB() {
    if(personalMovieDB.privat == false){
        console.log(false)
    } else {
        console.log(error)
    }
}


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
    }
}

writeYourGenres()

console.log(personalMovieDB)