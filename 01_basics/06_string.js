const name = "Padmaja";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name}  and my repo count is ${repoCount}`);


const gameName = new String('Padmaja-pc-com');

// console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('i'));

const anotherString = gameName.slice(1, 4);
console.log(anotherString);

const newStringOne = "   hitesh   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://padmaja.com/padmaja%20chaure";

console.log(url.replace('%20', '-'));
console.log(url.includes('padmaja'));
console.log(gameName.split('-')); 


