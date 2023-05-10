let saveButton = document.getElementById('save-button');
let deleteButton = document.getElementById('delete-button');
let inputArea = document.querySelector('input');
let newUl = document.querySelector('ul');

saveButton.addEventListener('click', function (e) {
    e.preventDefault();
    let textSaved = inputArea.value;
    localStorage.setItem('testo salvato', textSaved);
})

deleteButton.addEventListener('click', function (c) {
    c.preventDefault();
    localStorage.removeItem('testo salvato');
    inputArea.value = '';
})


let contatore = sessionStorage.getItem('contatore') || 0;
setInterval(() => {
    contatore++;
    sessionStorage.setItem('contatore', contatore);

    document.getElementById('contatore').innerHTML = 'tempo trascorso' + ' ' + contatore;


}, 1000)














// const refillContent = function () {
//     let lastTextSaved = localStorage.getItem('testo salvato');
//     if (lastTextSaved) {
//         inputArea.value = lastTextSaved
//     } else {
//         //rimane di default il placeholder inserito su HTML
//     }
// }

// window.onload = function () {
//     refillContent();
// }

