//let id1 = Symbol("id");
//console.log(id === id1);
//console.log(id.description);
// let user = {
//     name: "Igor",
// }
//
// let id = Symbol("idea");
// user[id] = 1;
// console.log(user);



// let id = Symbol("symbol_description")
// let newUser = {
//     name: "Igor",
//     [id]: 123,
//     age: 24,
// }
//
// for (let key in newUser) {
//     console.log(key);
// }
// console.log(newUser[id]);
//
// Object.keys(newUser).forEach(function (keys) {
//     console.log(keys, newUser[keys]);
// })


// let myObj = {
//     value: 3,
//     isRound: false,
// };
// Object.keys(myObj).forEach(key => {
//     console.log(key, myObj[key]);
// });
// Object.values(myObj).forEach(value => {
//     console.log(value);
// });


let igor = {
    name: "igor",
    sayHi: function () {
        return "hello igor";
    },
}
console.log(igor.sayHi())
