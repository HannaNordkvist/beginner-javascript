
// listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function buyItem() {
    console.log("köper varan");
}

// om det är flera element måste man loopa igenom alla element för att kunna använda addEventListener.
//buyButtons.addEventListener('click', buyItem); // funkar inte!

// buyButtons.forEach(function(buyButton) {
//     console.log('Binding the button');
//     buyButton.addEventListener('click', buyItem);
// });

// gör callbackfunktionen till en separat funkiton:
function handleBuyButtonClick(buyButton) {
    console.log('Binding the buy button');
    buyButton.addEventListener('click', buyItem);
}
console.log(buyButtons);

buyButtons.forEach(handleBuyButtonClick);

// --- arrow function ---
// buyButtons.forEach((button) => {
//     console.log('du klickade på knappen');
// })
// --- arrow function med arrow function ---
// --- en nackdel är att man inte kan unbinda pga anonymous funktion
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('du klickade på knappen');
    })   
})
