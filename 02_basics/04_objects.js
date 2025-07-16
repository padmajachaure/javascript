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
// const obj4 =Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

// const obj4 = {...obj1 , ...obj2 , ...obj3} //spread operator
// console.log(obj4);


//Array of object
const user = [
    {
        id : 1,
        email : "padmaja@gmail.com"
    },
     {
        id : 2,
        email : "padmaja@gmail.com"
    },
     {
        id : 3,
        email : "padmaja@gmail.com"
    },
     {
        id : 4,
        email : "padmaja@gmail.com"
    }
]

// console.log(user[2].email);



//  console.log(tinderUser);
//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isloggedIn"));





const course = {
    courseName : "js",
    price : "2000",
    courseInstructor:"Padmaja"
}

// course.courseInstructor
const {courseInstructor : couInst} = course
console.log(couInst);



const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}






 