const name = "shan"
const repoCount = "50"

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} my repo count is ${repoCount}`); 

const gameName = new String('shan-01-chaudhary-02') // string object 

console.log(gameName[0]);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,2);

console.log(newString);

const anotherString = gameName.slice(-1,4)
console.log(anotherString);


const newStringOne = "    shan   " // trim remove start and end spac

console.log(newStringOne.trim());

const url = "https;//google.com/shan" // replace use for replace string data

console.log(url.replace('shan','-'))



console.log(url.includes('shan'));

console.log(gameName.split('-'));

console.log(gameName.bold());


