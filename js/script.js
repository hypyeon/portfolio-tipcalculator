let tipAmount = document.getElementById('tip');
let totalAmount = document.getElementById('total'); 

/* Turning bill amount into 2 : please advice how to use the function below,
specifically after entering number and clicking outside the input. */

/* const billEntry = document.getElementById('bill-amount');
billEntry.addEventListener('input', () => {
    let entry = document.getElementById('bill-amount').value;
    let bill = entry.toFixed(2);
    entry.innerHTML = bill; 
}) */

const numOfPeopleEntry = document.getElementById('no-of-ppl');
numOfPeopleEntry.addEventListener('input', () => {
    let numOfPeople = document.getElementById('numOfPeople').value;
    if (numOfPeople == '0') {
        numOfPeopleEntry.classList.toggle('error');
    } else {
        numOfPeopleEntry.classList.remove('error');
        fivePercent.classList.remove('active');
        btnCustom.classList.remove('active');
        tenPercent.classList.remove('active');
        fifteenPercent.classList.remove('active');
        twentyFivePercent.classList.remove('active');
        fiftyPercent.classList.remove('active');
        document.getElementById('customize').value = 0;  
        
        tipAmount.innerHTML = '$0.00'; 
        totalAmount.innerHTML = '$0.00';    
    };
});

const fivePercent = document.getElementById('five');
fivePercent.addEventListener('click', () => {
    fivePercent.classList.toggle('active');

    btnCustom.classList.remove('active');
    tenPercent.classList.remove('active');
    fifteenPercent.classList.remove('active');
    twentyFivePercent.classList.remove('active');
    fiftyPercent.classList.remove('active');
    document.getElementById('customize').value = 0; 

    let bill = document.querySelector('#bill').value;
    let numOfPeople = document.getElementById('numOfPeople').value;

    let perPerson = bill / numOfPeople;
    let tip = perPerson / 100 * 5;
    let total = parseFloat(perPerson) + parseFloat(tip); 

    tipAmount.innerHTML = '$' + tip.toFixed(2); 
    totalAmount.innerHTML = '$' + total.toFixed(2);
});

const tenPercent = document.getElementById('ten');
tenPercent.addEventListener('click', () => {
    tenPercent.classList.toggle('active');

    btnCustom.classList.remove('active');
    fivePercent.classList.remove('active');
    fifteenPercent.classList.remove('active');
    twentyFivePercent.classList.remove('active');
    fiftyPercent.classList.remove('active');
    document.getElementById('customize').value = 0; 

    let bill = document.querySelector('#bill').value;
    let numOfPeople = document.getElementById('numOfPeople').value;

    let perPerson = bill / numOfPeople;
    let tip = perPerson / 100 * 10;
    let total = parseFloat(perPerson) + parseFloat(tip); 

    tipAmount.innerHTML = '$' + tip.toFixed(2); 
    totalAmount.innerHTML = '$' + total.toFixed(2);
});

const fifteenPercent = document.getElementById('fifteen');
fifteenPercent.addEventListener('click', () => {
    fifteenPercent.classList.toggle('active');

    btnCustom.classList.remove('active');
    fivePercent.classList.remove('active');
    tenPercent.classList.remove('active');
    twentyFivePercent.classList.remove('active');
    fiftyPercent.classList.remove('active');
    document.getElementById('customize').value = 0; 

    let bill = document.querySelector('#bill').value;
    let numOfPeople = document.getElementById('numOfPeople').value;

    let perPerson = bill / numOfPeople;
    let tip = perPerson / 100 * 15;
    let total = parseFloat(perPerson) + parseFloat(tip); 

    tipAmount.innerHTML = '$' + tip.toFixed(2); 
    totalAmount.innerHTML = '$' + total.toFixed(2);
});

const twentyFivePercent = document.getElementById('twentyfive');
twentyFivePercent.addEventListener('click', () => {
    twentyFivePercent.classList.toggle('active');

    btnCustom.classList.remove('active');
    fivePercent.classList.remove('active');
    tenPercent.classList.remove('active');
    fifteenPercent.classList.remove('active');
    fiftyPercent.classList.remove('active');
    document.getElementById('customize').value = 0; 

    let bill = document.querySelector('#bill').value;
    let numOfPeople = document.getElementById('numOfPeople').value;

    let perPerson = bill / numOfPeople;
    let tip = perPerson / 100 * 25;
    let total = parseFloat(perPerson) + parseFloat(tip); 

    tipAmount.innerHTML = '$' + tip.toFixed(2); 
    totalAmount.innerHTML = '$' + total.toFixed(2);
});

const fiftyPercent = document.getElementById('fifty');
fiftyPercent.addEventListener('click', () => {
    fiftyPercent.classList.toggle('active');

    btnCustom.classList.remove('active');
    fivePercent.classList.remove('active');
    tenPercent.classList.remove('active');
    fifteenPercent.classList.remove('active');
    twentyFivePercent.classList.remove('active');
    document.getElementById('customize').value = 0; 

    let bill = document.querySelector('#bill').value;
    let numOfPeople = document.getElementById('numOfPeople').value;

    let perPerson = bill / numOfPeople;
    let tip = perPerson / 100 * 50;
    let total = parseFloat(perPerson) + parseFloat(tip); 

    tipAmount.innerHTML = '$' + tip.toFixed(2); 
    totalAmount.innerHTML = '$' + total.toFixed(2);
});

const btnCustom = document.getElementById('custom');
btnCustom.addEventListener('click', () => {
    btnCustom.classList.toggle('active');

    fivePercent.classList.remove('active');
    tenPercent.classList.remove('active');
    fifteenPercent.classList.remove('active');
    twentyFivePercent.classList.remove('active');
    fiftyPercent.classList.remove('active');

});

const customTip = document.getElementById('customize'); 
customTip.addEventListener('input', () => {
    let bill = document.querySelector('#bill').value;
    let customizedTip = customTip.value;
    let numOfPeople = document.getElementById('numOfPeople').value;

    let perPerson = bill / numOfPeople;
    let tip = perPerson / 100 * customizedTip;
    let total = parseFloat(perPerson) + parseFloat(tip); 

    tipAmount.innerHTML = '$' + tip.toFixed(2); 
    totalAmount.innerHTML = '$' + total.toFixed(2);
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {

    btnCustom.classList.remove('active');
    fivePercent.classList.remove('active');
    tenPercent.classList.remove('active');
    fifteenPercent.classList.remove('active');
    twentyFivePercent.classList.remove('active');
    fiftyPercent.classList.remove('active');
    numOfPeopleEntry.classList.remove('error');

    document.querySelector('#bill').value = 0;
    document.getElementById('numOfPeople').value = 1;
    document.getElementById('customize').value = 0; 

    tipAmount.innerHTML = '$0.00'; 
    totalAmount.innerHTML = '$0.00';
});


