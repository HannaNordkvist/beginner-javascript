const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
    if (payload[0].intersectionRatio === 1) {
        button.disabled = false;
        // stop observing the button
        ob.unobserve(terms.lastElementChild);
    }
}

const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
});

ob.observe(terms.lastElementChild);

 // OBSERVER PATTERN
// intersection observer:
// will watch in an element tof on or off. Håller koll på element

// i videon går wes igenom när knappen disabelas igen när man scrollar

// OM det är en js-funktion som inte används på alla sidor kan man lägga
// all logik i en funktion som inehåller villkor för att köra. ex:
// 
// function scrollToAccept() {
//     const terms = document.querySelector('.terms-and-conditions');
//     if (!terms) {
//         return; // quit this, that item in not on the 
//     }

//     terms.addEventListener('scroll', function(e) {
//         console.log(e);
//     })
// }