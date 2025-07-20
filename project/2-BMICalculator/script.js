const from = document.querySelector('form')

from.addEventListener('submit', function(e){
    e.preventDefault();
    
    const Height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    let bmi;
    if (Height === '' || isNaN(Height) || Height <= 0 ) {
       results.innerHTML = 'Please enter valid values for height.';
    }else if (weight === '' || isNaN(weight) || weight <= 0) {
         results.innerHTML = 'Please enter valid values for weight.';
     } else {
        bmi = (weight / ((Height * Height) / 10000)).toFixed(2);
        results.innerHTML = `Your BMI is ${bmi}`;
     }

    if (bmi < 18.5) {
        results.innerHTML += '<br>You are underweight.';
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        results.innerHTML += '<br>You have a normal weight.';
    }
    else if (bmi >= 25 && bmi < 29.9) {
        results.innerHTML += '<br>You are overweight.';
    }
    else {
        results.innerHTML += '<br>You are obese.';
    }
});

