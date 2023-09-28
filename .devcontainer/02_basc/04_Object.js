const tinderUser = new Object() // singltun object

tinderUser.id = "123abc"
tinderUser.name = "shan"
tinderUser.IsLoggedIn = false

// console.log(tinderUser);


const reglarUser = {

    email: "shan@gmail.com",
    fullname : {
        firstname : "shan",
        lastname : "chaudhary",
    }
}

// console.log(reglarUser.fullname.firstname);

const obj1 = {1:"a" , 2: "b"}
const obj2 = {3:"c" , 4: "d"}
const obj3 = {5:"c" , 6: "d"}

// const obj4 = Object.assign({} , obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);



const user = [

    {
        id:1,
        email : "s@gmail.com",
    },

    {
        id:2,
        email : "a@gmail.com",
    },


    {
        id:3,
        email : "d@gmail.com",
    },

]

user[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // Object to > Array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('IsLoggedIn'));



const course = {
    coursname: "js hindi",
    price: "999",
    courseInstructor: " shan"
}
