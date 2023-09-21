//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let mycustomdate = new Date(2023, 0, 23)
//let mycustomdate = new Date(2023, 0, 23, 5, 3)
let mycustomdate = new Date("01-24-2023")
console.log(mycustomdate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(mycustomdate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString('default', {  
   weekday: "long",
})


