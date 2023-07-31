// del 30 - targets, ...

const buyButtons = document.querySelectorAll('button.buy');

// the event object - kolla information om addEventListener
// event objektet ger oss massa information, 
// första argumentet i callback-funktionen är eventobjektet.

// event - parameter - ofta "e".
function handleBuyButtonClick(event) {
    // console.log('Du köper det!');
    // console.log(event); //i consolen- ger ett "PointerEvent"
    // console.log(event.target); // ger information om target, i detta fall knappen.
   
    //console.log(event.target.dataset.price); // ger värdet för "data-price" på elementet

    // --kolla vilken typ det är med typeof.event.target..
    console.log(parseFloat(event.target.dataset.price)); // gör till int.
    // --parseFloat() behåller decimaler, parseInt() gör det inte.  

    const button = event.target;
    console.log(button.textContent); // ger data-price och text.
    console.log(event.currentTarget); // ger hela knapp-elementet ?!
    console.log(event.target); // är det som blir klickat, exempel med siffran i en <strong></strong>, klick på siffran är då den tagen
    console.log(event.target === event.currentTarget); // ger true/false
    // Stop this event from bubbling up - Om man har flera eventlistner i högre lager så avfyras inte de.
    event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener('click', handleBuyButtonClick);
});

// propagation : 
window.addEventListener('click', function(event) {
    console.log('You clicked the window!');
    console.log(event.target); // even
    console.log(event.type); // ger typ av event
    console.log(event.bubbles); // ger true/false
}, { capture: true } );

// capture up - bubble down

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mousemove', function(e) {
    console.log(e.currentTarget);
    console.count(e.currentTarget); 
    console.log(this); // är alltid = det som är till vänster om punkten i .addEventListner
    // fungerar inte i arrowfunctions
})

// fler event som kan användas : mouseenter, 








