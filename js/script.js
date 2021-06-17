// //008 Урок (Интерполяция)
// "use sctrict";
// //Интерполяция - задание значения переменной прямо внутри строки

// const category='toys';
// //Олдовая запись
// //console.log('https://someurl.com/'+ category);
// //Современная запись
// console.log(`https://someurl.com/${category}/5`);

// const user="Ivan";

// alert(`Привет,${user}`);

// //009 Урок (Операторы в JS)

// let incr = 10,
//     decr = 10;

// incr++; //++ Инкримент - увеличение на 1
// decr--; //-- Декримент - уменьшение на 1

// console.log(incr);
// console.log(decr);

// //++,-- Перед названием префиксная запись, После - Постфиксная
// //Постфиксная форма сначала возвращает старое значение, а после увеличивает или уменьшает

// console.log(++incr); //11
// console.log(--decr); //9

// console.log(incr++); //10
// console.log(decr++); //10

// // == != =
// console.log(2*4 == 8);//true
// console.log(2*4 === '8');//false
// console.log(2*4 === 8);//true

// //&& = and, || = or

// const isChecked = true,
//       isClosed = false;
//       console.log(isChecked && isClosed);//false
//       console.log(isClosed || isChecked);//true

// // != отрицание


let numberOfFilms=prompt("Skolko filmov you watched?",'');

const personal={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

let answer1=prompt('Odeen iz poslednih prosmotrennih filmov?');
let answer2=prompt('Na skolko ocenite ego?');

personal.movies={answer1,answer2};

console.log(personal.movies);