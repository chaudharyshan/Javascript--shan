// if

// const isUserloggedIn = true
const temp = 55 

// if(temp<50){
//     console.log("less than 50");
// } else {
//     console.log("Greater than 50 ");
// }

// <, > , <=,>=,==,===, !=


// const score = 200

// if (score>100) {

//     const power ="fly" // not able use out side scop{}
//     console.log(`User power: ${power}`);
    
// }


// const balance = 1000

// if (balance > 5000) console.log("test"),console.log("test2");


// nested if else

// if (balance < 500) {

//  console.log("less than 500");
    
// }else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less then 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
    
}

if (loggedInfromGoogle || loggedInfromEmail) {
    console.log("user logged in");
    
}

// Nullis Coalescing Operator(??)

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 13

console.log(val1);


// Terniary Operator

// conditon ? true : false 

const iceTea = 100

iceTea <= 80 ? console.log("less than 80") : console.log("more then 80")