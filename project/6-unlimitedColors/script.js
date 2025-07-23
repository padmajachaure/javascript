//generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

//change the background color every second
let intervalId;
const startChangingColor = function() {
    if(!intervalId) {
        intervalId = setInterval(changeBGColor, 1000);
    }
    function changeBGColor() {
        document.body.style.backgroundColor = randomColor();
        document.querySelector('h1').style.color = "#212121";

    }
}
const stopChangingColor = function() {
    clearInterval(intervalId);
    intervalId = null;
};


document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);