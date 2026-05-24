/* Permitive data type (Call by value)*/
//type :-
//String
//Number
//null
//Undefined
//Symbol
//BigInt

/*(Refrence type) Non Permitive Data types*/
//Arrays , Objects, Function

/*
var ignores block scope:

let:-Use when the value may change.
     "Block scoped"

const:-Use when the variable should not be reassigned.
       "const Use when the variable should not be reassigned."
*/

const id = Symbol("123")
console.log(id)

//Array, Objects, Function
const hero = ["Gagan" , "Deepanshu" , "Aady"] // Array
console.log(hero)

let obj = { //Object 
    name : "Gagan",
    age : 24
}
console.log(obj)


