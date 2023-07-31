// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;  // för skrivsätt variabel som är hårdkodad och inte kommer förändras
const LINE_WIDTH = 30;
// Setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas.
// --- DESTRUCTURING --- 
//  : Om man gör variabler från en propertie av ett objekt kan man korta ner det:
const { width, height} = canvas; 
// const width = canvas.width; // Längre sättet
// const height = canvas.height;

let x = Math.floor(Math.random() * width);  // let pga värdet kommer förändras
let y = Math.floor(Math.random() * height);
// create random x and y starting points on the canvas

// STARTPUNKTEN
ctx.lineJoin = 'round'; // OM 'square' blir pricken en fyrkant
ctx.lineCap = 'round';
ctx.lineWidth = LINE_WIDTH;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke();

// write a draw function
// ---OBJECT DESTRUCTURING - ta bort'options' och skriv direkt vilken property man vill åt. 
function draw({ key }) {
    // increment the hue
    hue += 1; // öka för att byta färg fortare
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // måste sätta värdet igen
    //ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`; // Få random färg varje gång. 
    console.log(key);
    ctx.beginPath();  // start the path.
    ctx.moveTo(x, y); // move our x and y values depending on what the user did.
    
    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;   
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break; 
        default: 
            break;
    }
    // x -= MOVE_AMOUNT; // x = x - 10; // långa versionen
   
    ctx.lineTo(x, y);
    ctx.stroke();

}
// function draw(options) {   // tidigare sättet utan destructuring
//     console.log(options); // ger hela options-objektet
// }

// write a handler for the keys
function handleKey(e) {   
    if (e.key.includes('Arrow')) {
        e.preventDefault(); // förhindra defaultbeteendet att sidan rullar
        draw({ key: e.key}); // call the object, passing just what we need. Inte hela eventet.
        // console.log(e.key); // se i consolen vilken tangent som trycks ner.
        // console.log('HANDLING KEY');
    }
}

// clear shake function
function clearCanvas() {
   canvas.classList.add('shake');  // lägger till class 'shake'.
   ctx.clearRect(0, 0, width, height);  // rensa det målade. Anv variablerna
   canvas.addEventListener('animationend', function() {
    console.log('done the shake');
    canvas.classList.remove('shake');
   },
   { once : true }  // "theird argument". ett objekt satt till 'once". istället för att ta bort eventlistneren, så det inte finns flera
   ); 
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas );
