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



console.log(loginUserMessage());
