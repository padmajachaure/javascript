//singleton
// Object.create

// object literals

const mysym = Symbol("kay1")

const  JsUser = {
    name: "Padmaja",
    "full name" : "Padmaja Chaure",
    [mysym] : "key1",
    age : 18,
    location : "Solapur",
    email : "Padmaja@123gmail.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday", "Satureday"]
}

// console.log(JsUser.email);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);

JsUser.email = "padmaja@chatgpt.com"
// console.log(JsUser["email"]);
// Object.freeze(JsUser)       //after freeze you dont change a value of object
JsUser.email = "padmaja@microsoft.com"
// console.log(JsUser["email"]);
// JsUser.name = "Sanika"
// console.log(JsUser["name"]);
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User")
}
console.log(JsUser.greeting());


JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greetingTwo());
