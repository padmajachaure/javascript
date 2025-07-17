//Immediately Invoked Function Expression (IIFE)


// IIFE FUNCTIONs are immidiately invoked
(function DBConnection() {
    console.log("DB connected");
    
})();

( (name) => {
    console.log(`${name}'s DB connected`);
    
})("Padmaja")

//note : global variable polution ki problem se bachane ke liye we used IIFE function
