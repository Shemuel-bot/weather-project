let value = 'london';
const userInput = document.createElement('input');
const submit = document.createElement('button');

document.body.appendChild(userInput);
document.body.appendChild(submit);

submit.textContent='Set Location!';

async function CallApi(){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=3e04850aa3124160880174442240303&q=${value}`, {mode:'cors'});
    console.log(response.json());
    }
    
    CallApi();
    
    submit.onclick = () => {
        value = userInput.value
        CallApi();
    }
    