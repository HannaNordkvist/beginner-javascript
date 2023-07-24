console.log('det funkar!');

// En variabel ex 'const godis = bilar' som ligger i en .js fil är GLOBAL,
// lägg som source i bodyn i html-filen och kom åt värdet direkt från consolen.
// const, let och var är globala variabler men inte 'window.', men funktioner är tillgängliga.

// --------------------------
const age = 100;

function go() {
    const hair = 'blonde';
}

go()

console.log(age); // kommer visas i consolen
console.log(hair); // kommer inte visas pga inte global. 
// --------------------------
// VAR är function scoped inte block scoped
// LET och CONST är block scoped
// lexitly 
// -----  function scope -----
function isCool(name) {
    let cool;
    if(name==='hanna') {
        cool = true;
    }
    console.log(cool);
    return cool;
 }
 function isCool2(name) {
    if(name==='hanna') {
        var cool = true;
    }
    console.log(cool);
    return cool;
 }










