// Make a div
const myDiv = document.createElement('div');
console.log(myDiv);

// add a class of wrapper to it
//myDiv.className = 'wrapper';
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list

const ul2 = `<ul>
  <li>ett</li>
  <li>två</li>
  <li>tre</li>
</ul>`;

//min
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

li1.textContent = 'lite text 1';
li2.textContent = 'lite text 2';
li3.textContent = 'lite text 3';

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

console.log(ul);

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
myDiv.innerHTML = ul2;
console.log(myDiv);

// create an image
const myImage = document.createElement('img');
console.log(myImage);

// set the source to an image
myImage.src = `https://picsum.photos/500`;
// myImage.setAttribute('src', `https://picsum.photos/`);
// const src = `https://picsum.photos/`;

// set the width to 250
myImage.width = 250;
// add a class of cute
//myImage.className = 'cute';
myImage.classList.add('cute');
// add an alt of Cute Puppy
myImage.alt = `random picture`;
// Append that image to the wrapper
myDiv.appendChild(myImage);


// with HTML string, make a div, with two paragraphs inside of it
const myHTMLdiv = 
`<div class="myDiv2">
<p>one</p>
<p>two</p>
</div>`

// put this div before the unordered list from above
const myUl = myDiv.querySelector('ul');
console.log(myUl);
myUl.insertAdjacentHTML('beforebegin', myHTMLdiv);
// -----create range, eller insertAdjacentHTML('beforebegin', )

// add a class to the second paragraph called warning
const theDiv = myDiv.querySelector('.myDiv2');
console.log(theDiv);
theDiv.children[1].classList.add('warning');
//theDiv.children[1].className('warning');

// remove the first paragraph
theDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
    const htmlReturn = `
    <div class="playerCard">
       <h2>${name} — ${age}</h2>
       <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
       </div>
       `;
       return htmlReturn;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// -- ett alternativ wes skrev:
//cards.insertAdjacentHTML('afterbegin', generatePlayerCard('snickers', 12, 50));

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
