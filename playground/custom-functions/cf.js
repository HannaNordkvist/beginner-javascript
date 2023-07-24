
function calculateBill(billAmount, taxRate = 0.5, tipRate = 0.15) {
    // this is the function body - all in here is part of the function
    const total = billAmount + billAmount * taxRate + billAmount * tipRate;

    // för att "total" inte ska vara Undefined utanför scopet - return!
    return total;
}

// function call. Or "run"
// lägg i en variabel för att få åtkomst till variabeln.
// Annars försvinner värdet, finns bara i scopet
const myTotal = calculateBill(100, 1.25);
const myTotal2 = calculateBill(200, 1.25);
console.log(myTotal);

//console.log(`Din total 2 är $${calculateBill()}`);

//const firstName = 'Klara';
//function Definition
function sayHiTo(firstName) {
    return `hello ${firstName}`;
}

const greeting = sayHiTo('Bengan');
console.log(greeting);

// det är värdet som tas in i funktionen - inte alla nummer.
const myTotal3 = calculateBill(20 + 20 + 30 + 20, 0.35);

function doctorize(name) {
return `Dr. ${name}`;
}

// sätta default så att funktionen kan ha nullvärde utan error.
function yell(name = 'defaultNamn') {
    return `HEY ${name.toUpperCase()}`;
}

// använda endast ett defaultvärde. "undefined" måste in inte 0 eller annat.
const myTotal4 = calculateBill(100, undefined, 0.4);
console.log(myTotal4);


