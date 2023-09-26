// sigleton

// object literals
const mySum = Symbol("key1")

const Jsuser = {
    name: " shan",
    "full name" : "shan chaudahry",
    age: 18,
    [mySum]: "mykey1",
    location: "mansa",
    email: "shan@gmai.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","Saturday"],


}


// console.log(Jsuser.email);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySum]);

Jsuser.email = "shan@micro.com"
// Object.freeze(Jsuser)
Jsuser.email = "shan@chat.com"

// console.log(Jsuser.email);

Jsuser.greeting = function(){
    console.log(" hello js user");
}

Jsuser.greeting2 = function(){
    console.log(`hello js user, ${this["full name"]}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());