const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из фильмов', ''),
          b = prompt('Оценка', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--; 
    } 
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}
console.log(personalMovieDB);

// let i = 0;
// while (i < 2) {
//     const q1 = prompt('Один из последних фильмов?'),
//           q2 = prompt('На сколько оцените его?');
//           personalMovieDB.movies[q1] = q2;
//           i++;

//     if (q1 === "" || q1 === null || q2 === "" || q2 == "" || q1.length > 50 || q2.length > 50) {
//         console.log(`q1=${q1} q2=${q2}`);
//         break;
//     }

// }
// console.log(personalMovieDB.count);

// switch (personalMovieDB.count) {
//     case personalMovieDB.count < 10:
//         console.log('Проосмотрено довольно мало фильмов');
//         break;
//     case 10 <= personalMovieDB.count <= 30:
//         console.log('Вы классический зритель');
//         break;
//     case personalMovieDB.count > 30:
//         console.log('Вы киноман');
//         break;
//     default:
//         console.log('Произошла ошибка');
//         break;
// }
    // if (personalMovieDB.count < 10) {
    //     console.log('Проосмотрено довольно мало фильмов');
    // } else if (10 <= personalMovieDB.count <= 30) {
    //     console.log('Вы классический зритель');
    // } else if (personalMovieDB.count > 30) {
    //     console.log('Вы киноман');
    // } else {
    //     console.log('Произошла ошибка');
    // }


//console.log(personalMovieDB);



