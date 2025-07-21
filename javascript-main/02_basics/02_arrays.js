const marvel_heros = ["thor", "iron-Man","Spiderman"]
const dc_heros = ["superman", "flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);           // output is array within an array
// console.log(marvel_heros[3][1]);     // flash


// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator
// console.log(all_new_heros);

const another_array = [1,2,4,[2,5,7,[4,7,4]],5,9,2]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Padmaja"));
// console.log(Array.from("Padmaja"));
// console.log(Array.from({name: "Padmaja"})); //interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

