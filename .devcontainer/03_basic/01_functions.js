function sayMyName(params) {

    console.log("s");
    console.log("h");
    console.log("a");
    console.log("n");
}

// sayMyName()

// function addTwoNumbers(Number1, Number2) {



//    console.log( Number1 + Number2);
    
// }

function addTwoNumbers(Number1, Number2) {

    // let result = Number1 + Number2
    // return result

    return Number1+Number2
    
}

const result = addTwoNumbers(3, 4) // arguments

// console.log(result);

function loginUserMessage(username = "sam") {
    if(!username){
        console.log("Please enter a username");
        return

    }
    return `${username} just logged in`
    
}



// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
    return num1

    
}

// console.log(calculateCartPrice(20, 400, 500));

const user = {
    username: " shan",
    price: 200
}

function handleObject(anyobject) {

    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

handleObject({
    username : "sam",
    price : 399
})


const myArray = [200, 300, 500, 600]

function returnSecondValue(getArray){
    return getArray [1]
    
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue(
    [200,500,600,700]
));