const cardPrice = [100,200,300,500]

// const TotalPrice = cardPrice.reduce(function(accumelator , currVal){
//     console.log(`acc : ${accumelator} and current Value : ${currVal}`);
    
//     return accumelator  + currVal
// },0)


let TotalPrice = cardPrice.reduce((acc , currVal)=>(acc+currVal),0)

// console.log(TotalPrice);

const course = [
    {
        itemName : "js Course",
        price : 2999
    },
     {
        itemName : "c Course",
        price : 999
    },
     {
        itemName : "py Course",
        price : 1999
    },
     {
        itemName : "DS Course",
        price : 4999
    },
]
TotalPrice = course.reduce((acc,item)=>(acc + item.price),0)
console.log(TotalPrice);



