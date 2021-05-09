// Vi gør så vi kan ændre på html
let first = document.getElementById("original-currency-unit");
let second = document.getElementById("new-currency-unit");
let num1 = document.getElementById("original-currency-amount");
let num2 = document.getElementById("new-currency-amount");

//

// opsætter valuta
let currency = {
    "Danish Krone": 7.4361,
    "US Dollar": 1.21229,
    "Euro": 1,
    "British Pound": 0.889321
}
// Vi gør så vi kan ændre på exchange rate
let exchange = document.getElementById("exchange-rate");
let exchangeRate = 1;

// Regner faktisk hvad det bliver
const change = (e) => {
    exchangeRate = currency[second.value] / currency[first.value];
    calculate(e);
    
    exchange.textContent = "1 " + abbreviation(first.value) + " = " + Number(exchangeRate.toFixed(2)) + " " + abbreviation(second.value);
}
// Sætter forkortelser 
const abbreviation = (ex) => {
    switch(ex) {
        case "Danish Krone":
            return "DKK";
        case "US Dollar":
            return "USD";
        case "Euro":
            return "EUR";
        case "British Pound":
            return "GBP";
    }
    
}

const calculate = (e) => {   
    if (e.target.id == "new-currency-amount") {
        num1.value = Number((exchangeRate * num2.value).toFixed(2));
    } else {
        if(num1.value == "") num1.value = 1;
        num2.value = Number((exchangeRate * num1.value).toFixed(2));
    }
}


first.addEventListener("change", change);
second.addEventListener("change", change);
num1.addEventListener("input", calculate);
num2.addEventListener("input", calculate);