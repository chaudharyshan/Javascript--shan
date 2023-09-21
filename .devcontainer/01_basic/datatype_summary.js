// Primitve 

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue =100.3

const isLoggedIn = false
const putsideTemp = null
let userEmail;

const id = Symbol('123')

const bigNumber = 23455389026405820576038452072605498967402582962099n



//-------------------------


// Reference (Non primitive)

// Array, Objects, Functions - typeof objects

const heros = ["shaktiman", "naagraj", "doga"]
let myobj ={
    name: " shan",
    age:24
}

const myfunction = function () {
    console.log("hello")
    
}    


// Stack (Primitive), Heap (Non- Primitive)

let userOne = {
    email: "user@google.com",
    upi: "user@yble"
}

let userTwo = userOne 

userTwo.email = "yhan@gmail.com"

console.log(userOne.email);
console.log(userTwo.email); 