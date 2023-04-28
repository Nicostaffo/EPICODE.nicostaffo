let nav = document.querySelector('nav');
let but = document.querySelector('.start');

window.onscroll = () => {
    if (window.pageYOffset > 300) {
        nav.classList.add('colorSwitch');
        but.classList.add('colorSwitch2');
    } else {
        nav.classList.remove('colorSwitch');
        but.classList.remove('colorSwitch2');
    }

};



let lettere = document.querySelectorAll('.artwork svg g')

function selectRandom(z) {
    return z[Math.floor(Math.random() * z.length)];
}

function animateLetters() {
    let change = selectRandom(Array.from(lettere));
    if (change.classList.contains('lettere')) {
        change.classList.remove('lettere');
    } else {
        change.classList.add('lettere');
    }
};

setInterval(animateLetters, 2);