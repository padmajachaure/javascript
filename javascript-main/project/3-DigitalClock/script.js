const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

setInterval(function(){
    const date = new Date();

   clock.innerHTML = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    
},1000)


