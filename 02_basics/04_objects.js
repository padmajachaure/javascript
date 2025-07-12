// const tinderUser = new Object();  //singleton object 
const tinderUser = {}     

tinderUser.id = "123";
tinderUser.name = "Padmaja"
tinderUser.isloggedIn = false;
//  console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        usersName :{
            firstName : "Padmaja",
            LastName : "Chaure"
        }
    }
}

// console.log(regularUser.fullname.usersName.firstName);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

// const obj4 = {obj1 , obj2}
// console.log(obj4);
const obj4 =Object.assign({}, obj1, obj2, obj3)
console.log(obj4);




 