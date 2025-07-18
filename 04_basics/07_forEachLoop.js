const programming = ['c' , 'c++','java','python','ruby']

//Simple function in for loop

// programming.forEach(function (item) {
//     // console.log(item);
    
// })

//Arrow fuunction in loop

// programming.forEach((item)=> {
//     console.log(item);
    
// })


//Function as an agrgument in loop

// function printMe(item){
//     console.log(item);
    
// }

// programming.forEach(printMe)



// programming.forEach((index,item,arr )=>{
//     console.log(index,item,arr);

// })




const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
     {
        languageName : "c++",
        languageFileName : "Cpp"
    },
     {
        languageName : "python",
        languageFileName : "py"
    },
    
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})