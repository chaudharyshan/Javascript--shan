const marvel_Heros = ["thor", "Ironman", " sipderman"]
const dc_Heros = ["superman", "flash", "batman"]

// marvel_Heros.push(dc_Heros)

// console.log(marvel_Heros);
// console.log(marvel_Heros[3]);

// const all_hero = marvel_Heros.concat(dc_Heros)
// console.log(all_hero);

const all_newHeros = [...marvel_Heros, ...dc_Heros] // spred oprater

// console.log(all_newHeros);

const other_array = [1, 2, 3, [4, 5, 6], 7 , [6, 7 , [6, 7]]]

const real_other_array = other_array.flat(Infinity)
// console.log(real_other_array);




console.log(Array.isArray("Shan"))
console.log(Array.from({name: "shan"}))