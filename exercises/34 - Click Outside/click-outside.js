const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(e) {
    const button = e.currentTarget;
    const card = button.closest('.card');
    // grab the image src
    const imgSrc = card.querySelector('img').src;
    const description = card.dataset.description;
    const name = card.querySelector('h2').textContent;
    // populate the modal with the new info
    // img width och height är till för att det ska se bra ut innan bilden laddats
    // alternativ är att använda document.createlement - skapa en img - vänta sedan på att den laddas (load event) visa något under tiden..
    modalInner.innerHTML = `
    <img width="600" height="600" src="${imgSrc.replace('200','600')}" alt="${name}"/>
    <p>${description}</p>
    `;
    console.log(card);
    // show the modal
    modalOuter.classList.add('open');
}

cardButtons.forEach(button => 
    button.addEventListener('click', handleCardButtonClick)
);

// enklare sätt att stänga modal
function closeModal() {
    modalOuter.classList.remove('open');
}

// lyssnar på klickevent på modal
modalOuter.addEventListener('click', function(event) {
    const isOutside = !event.target.closest('.modal-inner');
    if (isOutside) {
        closeModal();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});
