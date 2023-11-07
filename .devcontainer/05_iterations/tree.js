// for of

const arr = [ 1, 2, 3, 4, 5+1] 

for (const num of arr) {
    // console.log(num);
}

//----  ---//

const greetings = "hello world"

for (const greet of greetings) {
    // console.log(`Each char ${greet}`);
    
}

//---- Map ---//

const map = new Map() 
map.set('IN' , "India")
map.set('USA' , "America")
map.set('Fr' , "France")

// console.log(map);


for (const [key, value] of map) {
    console.log(key, '-', value);
    
}


const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spaiderman',
}