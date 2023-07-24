const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  debugger;
  console.log(person.name);
});

// exempel på funktionalitet på console. error . table . count . group warning mfl.
// people.forEach((person, index) => {
//   if (person.name === 'Wes') {
//     console.error('Dumb name');
//   }
// });

// people.forEach((person, index) => {
//   console.groupCollapsed('${person.name}');
//   console.log(person.country);
//   console.log(person.cool);
//   console.log('DONE!');
//   console.groupEnd('${person.name}');
 
// });



// Console Methods

// Callstack

// Grabbing Elements
// Skriv $0 i consolen för att se om det element man valt i elements-fliken.
// skriv $  eller  $$ i consolen under inspect. Queryselector, tar fram det du väljer,
// ex: $('p') GER första P-TAGGAR. $$ ger alla.

// Breakpoints
// Skriv debugger; i koden - breakpoint
// gå in i inspect-Sources- välj fil - klicka på rad där debugging ska inträffa. klart.

// Scope

// Network Requests
// Gå till Network-sidan under inspect. 

// Break On Attribute

// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
