const user = {
    username: "shan",
    price: 999,

    welcomePop: function () {
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }
} // this keyword 

// user.welcomePop()
// user.username = "priya"
// user.welcomePop()

// console.log(this);

// function one() {
//     console.log(this);
    
// }

// one()

const chai = () => {
    
    let username = "shan"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4));

// const addTwo = (num1, num2) =>  num1 + num2

const addTwo = (num1, num2) =>  ({username : "shan"}, num1 + num2)


console.log(addTwo(3,4));

const myArray = [2, 4, 5, 6, 7]

// myArray.forEach(()=>{})
