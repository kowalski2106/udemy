// let result = '';
// for (let i = 1; i < 7; i++) {
//     result += '*';
//     console.log(result);
// }

// let res = '';
// for (let i = 1; i < 7; i++) {
//     for (let j = 0; j < i; j++) {
//         res += '*';
//     }
//     if (i < 6) {
//         res += '\n';
//     }
    
// }
// console.log(res);

// first: for (let i = 0; i < 3; i++){
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) {continue first;}
//             console.log(`Third level: ${k}`);
//         }
//     }

// }


// Место для первой задачи
function firstTask() {
    for (let i = 5; i < 11; i++) {
        console.log(i);
    }   
}
//firstTask();

// Место для второй задачи
function secondTask() {
    for (let i = 20; i > 9; i--) {
        if (i === 13) {
            break;
        }
        console.log(i);
    }    
}
//secondTask();

// Место для третьей задачи
function thirdTask() {
    for (let i = 2; i < 11; i+=2) {
        console.log(i);
    }
}
//thirdTask();

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// function fourthTask() {
//     // Пишем решение вот тут
//     let i = 2;
//     while (i <= 16) {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         }
//         else {
//             console.log(i);
//             i++;
//         }       
//     }
// }
// fourthTask();

// Место для пятой задачи

// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers.push(i);
//     }
    
    
//     // Не трогаем
//     return arrayOfNumbers;
// }
// console.log(fifthTask());

// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [...arr];

    // Пишем решение вот тут
    
    
    // Не трогаем
    return result;
}

//console.log(firstTask());

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] *= 2;
        }
        else {
            data[i] += ' - done';
            
        }
    }
    // Не трогаем
    return data;
}

//console.log(secondTask());
// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for (let i = data.length - 1; i > -1; i--) {
        result.push(data[i]);
    }
    
    // Не трогаем
    return result;
}

//console.log(thirdTask());

//const lines = 5;
//let result = '';
//let probel = '     ';
//let numOfprobels = 5;
// let s = '*';
// // Проверяется именно переменная result, формируйте строку в ней
// let count = 5;
// while (s.length <= 11) {
//     result = probel.substring(0, count) + s;
//     console.log(result.length);
//     console.log(result);
//     count--;
//     s += '**'; 
// }
const lines = 5;
let result = '';

/*
     *
    ***
   *****
  *******
 *********
***********
*/

let myFunc = (a, b) => {
    return a + b;
};

//console.log(myFunc(3, 5));

let ask = (question, yes, no) => {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
};

//ask("Вы согласны?", () => alert("Вы согласились"), () => alert("Вы отменили выполнение"));


// let user = {
//     name: 'Igor',
//     'age': 24,
//     'like js': true
// };

// user.isAdmin = true;
// delete user.age;

//console.log(user["like js"]);




// let makeUser = (name, age) => {
//     return {
//         name, //name: name
//         age  //age: age
//     };
// };
// let user = makeUser('Igor', 24);
// user.isAdmin = true;
// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }
// console.log(user.name);
// console.log(user.age);
// console.log("age" in user);

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
//console.log(user.name + user.surname);


function isEmpty(obj) {
    for (let key in obj) {
       return false;
    }
    return true;
}

let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let res = 0;
for (let key in salaries) {
    res += salaries[key];
}
console.log(res);

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// multiplyNumeric(menu);
// console.log(menu);
// function multiplyNumeric(menu) {
//     for (let key in menu) {
//         if (typeof menu[key] == 'number') {
//             menu[key] *= 2;
//         }
        
//     }
// }
// multiplyNumeric(menu);




// let objA = {name: 'Igor'};
// let firstProp = {prop1: 100};
// let secondProp = {prop2: 200, prop3: {height: 300, weight: 1000}};
//Object.assign(objA, firstProp, secondProp);
//console.log(objA);

// let clone = Object.assign({}, objA);
// console.log(clone);

// console.log(objA.prop3 == clone.prop3);
// objA.prop3.height++;
// console.log(clone.prop3.height);


// var _ = require('lodash');
// let fObj = {
//     name: 'Igor',
//     hobbies: {
//         games: 'Dota',
//         sport: 'gym'
//     }
// };
// let cloneFObj = _.cloneDeep(fObj);
// console.log(fObj.hobbies == cloneFObj.hobbies);
// console.log(cloneFObj);
// fObj.hobbies.games = 'Warcraft';
// console.log(fObj);
// console.log(cloneFObj);



// let user1 = {
//    sayhi() {
//        console.log('hello ' + this.name);
//    },
//    name: "John"
// };
// let a = user1;
// user = null;
// a.sayhi();


// let calculator = {
//     read() {
//         this.x = 5;
//         this.y = 10;
//     },
//     sum() {
//         return this.x + this.y;
//     },
//     mul() {
//         return this.x * this.y;
//     }
//   };
  
//   calculator.read();
//   console.log( calculator.sum() );
//   console.log( calculator.mul() );


// function User(name) {
//     this.name = name;
//     this.isAdmin = true;
// }

// let user2 = new User("Igor");
// console.log(user2.name);
// console.log(user2.isAdmin);


function Calculator() {
    this.read = function() {
        this.a = 5;
        this.b = 10;
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}

let calc = new Calculator();
calc.read();
console.log(calc.sum());


function Accumulator(stringValue) {
    this.value = stringValue;
    this.read = function() {
        this.value++;
    };
}

let acc = new Accumulator(1);
acc.read();
acc.read();
console.log(acc.value);

let arr = [1,2,3];
let newArr = arr.map(function(e) {
    return e *= 2;
});
console.log(arr);
console.log(newArr);

//destruction
let destObj = {
    firstName: "igor",
    myAge: 24,
};

const {firstName, myAge} = destObj;
console.log(firstName, myAge);


let destArr = ['apple', 'juice'];
const [firstItem, secondItem] = destArr;
console.log(firstItem, secondItem);


let arrForEach = ['first', 'second', 'third'];
arrForEach.forEach((el, i) => {
    console.log(el, i);
});

let myObj = {
    value: 3,
    isRound: false,
};
Object.keys(myObj).forEach(key => {
    console.log(key, myObj[key]);
});
Object.values(myObj).forEach(value => {
    console.log(value);
});


class Comment {
    constructor(text) {
        this.text = text;
        this.votesQty = 0;
    }
    upvote() {
        this.votesQty += 1;
    }
    static mergeComments(first, second) { //static экземпляры класса не наследуют, доступен как свойство класса Obj.{static fnc}
        return `${first} ${second}`;
    }
}
console.log(Comment.mergeComments('one', 'two'));
let myComment = new Comment('my comment');
//myComment.mergeComments('three', 'four'); //error
console.log(myComment.text);
console.log(myComment instanceof Comment);
console.log(myComment.hasOwnProperty('text'));


class myArraySumNumbers extends Array {
    sum() {
        return this.reduce(function(el, acc) {
            return acc += el;
        }, 0);
    }
}

let myNewArray = new myArraySumNumbers(3,4,5);
console.log(myNewArray.sum());

