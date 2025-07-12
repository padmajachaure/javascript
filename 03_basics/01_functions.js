function sayMyName(){
    console.log("Padmaja");
    console.log("Padmaja");
    console.log("Padmaja");
    console.log("Padmaja");
    console.log("Padmaja");    
}

// sayMyName();


function addTwoNumber(number1 , number2){ //parameters
    return number1 + number2;
}

result = addTwoNumber(2,6); // arguments

// console.log("Result : ", result);


function userLoggedIn(username = "user"){
    if(!username ){
        console.log("Please enter a username");
    }
    else{
        return `${username} just logged in`
    } 
}

// console.log(userLoggedIn("Padmaja"))
// console.log(userLoggedIn(""))
// console.log(userLoggedIn())
 


function calculateCardPrice(val1 , val2 , ...num1){ //spread oprator stores all values into array
    return num1
}

// console.log( calculateCardPrice(100,200,300,400));

const user = {
    name : "Padmaja",
    price : "free",
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
    
}

// handleObject(user)
// handleObject({
//     name:"Padmaja",
//     price: 199
// })


const myArray=[100,200,300]

function handleArray(AnyArray){
    return AnyArray[2]
}

console.log(handleArray(myArray));
