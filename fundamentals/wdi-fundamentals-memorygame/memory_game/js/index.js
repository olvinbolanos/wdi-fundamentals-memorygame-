var pics = [ 
    'king-of-diamonds.png', 
    'king-of-hearts.png', 
    'queen-of-diamonds.png', 
    'queen-of-hearts.png'
];


var behindIt = () => {
    let cards = document.querySelectorAll('.card');
        cards.forEach((el) => {
            el.className = el.className.replace(/\bcard\b/, 'flippedBackwards');
            cards[0].src = 'images/' + pics[0];
            cards[1].src = 'images/' + pics[1];
            cards[2].src = 'images/' + pics[2];
            cards[3].src = 'images/' + pics[3];
    });
}



let gallery = document.getElementById('flipped');
gallery.addEventListener('click', behindIt, false);
function newFunction(el) {
    el[0].src = pics[0];
}

