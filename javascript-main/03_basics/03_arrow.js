const user = {
    username : "Padmaja",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to website `);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username= "Rahul"
// user.welcomeMessage()

// console.log(this);


function sampleThis(){
    let username = "Padmaja"
    // console.log(this);
    console.log(this.username);
    
}

// sampleThis()


// ++++++++++++++++++++++++++++ Arrow Function ++++++++++++++++++++++++++++++++++++++++


const hello = () => {
    console.log("Hello Guest");
    
}

// hello()

const sum = (num1 , num2) => {
    // return num1 + num2 
}

// console.log(sum(2 , 9))


// const addTwoNum = ( num1 , num2) => num1 + num2
const addTwoNum = ( num1 , num2) => (num1 + num2)

// console.log(addTwoNum(23 , 56));

const returnObj = () => ({username : "Padmaja"})
// console.log(returnObj());

