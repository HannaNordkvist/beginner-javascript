
const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
    const shouldChangePage = confirm(
        `Denna sida kan vara malicious! 
        vill du verkligen fortsätta?`
    );
    // OM shouldChangePage är false - byt inte sida
    if (!shouldChangePage) {
        event.preventDefault();
    }   
})

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
    const name = event.currentTarget.name.value;
    if (name.includes('chad')) {
        alert('Inga Chad är ok');
        event.preventDefault();
    }
    // regex kan användas för att göra casesensitive
});

function logEvent(event) {
    console.log(event.type);
    console.log(event.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent );
signupForm.name.addEventListener('keydown', logEvent );
signupForm.name.addEventListener('focus', logEvent );
signupForm.name.addEventListener('blur', logEvent );


// EXEMPEL PÅ EVENTS
// 'keyup'
// 'keydown'
// 'focus'
// 'blur'

// --- TILLGÄNGLIGHET EXEMPEL ---
const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
    if(event.type === 'click' || event.key === 'Enter') {
        console.log('Du klickade på bilden');
        console.log(event.key);
    }
  
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);

const phototwo = document.querySelector('.phototwo');
phototwo.addEventListener('click', function() {
    console.log('Du klickade på diven');

    // fungerar endast med musklick - inte med enterknappen. 
} )
//hur man lyssnar på enter-trycket. event.key
// *** keycode.info ***



// signupForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     // olika sätt att fånga element i ett formulär
//     event.currentTarget.querySelector('[name="email"]'); // onödigt att använda queryselector om man använder riktiga(proper) namn

//     console.log(event.currentTarget.name.value); //fungerar pga elementet har ett "name"-attribut
//     console.log(event.currentTarget.email.value);
//     console.log(event.currentTarget.agree.checked);

//     console.dir(event.currentTarget); // ger hela formuläret

// });





