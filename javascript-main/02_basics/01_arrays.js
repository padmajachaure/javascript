
//Arrays

const myArray = [1,2,3,4,5,6,"nagaraj"]
const myHeros = ["shaktiman ", "Nagraj"]

// console.log(myArray[4]);


const myArr = new Array(10,20,30,40,50)
// console.log(myArray);


//Array Methods

myArr.push(60)
// console.log(myArr);
myArr.pop()
// console.log(myArr);

myArr.unshift(10);
// console.log(myArr);
myArr.shift()
// console.log(myArr);


// const newArr = myArr.join(); // join converts elements  array to string
// console.log(myArr);
// console.log(newArr); 
// console.log( typeof newArr); 


// Slice && Splice

console.log("A ",myArr)
const newArray = myArr.slice(1,4) // slice dont include last range and slice dont channge original array slice make a copy of array
console.log(newArray)
console.log("B ",myArr)

const newArray2 = myArr.splice(1,4)//splice print the element include last range and chnge original array
console.log(newArray2)
console.log("C ",myArr)






