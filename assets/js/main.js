// Descrizione:
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, 
// uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. 

// creo una funzione che assegno al bottone
// genero i numeri e li stampo tramite un for
const buttonEl = document.querySelector('.btn');

buttonEl.addEventListener('click', function(){
    numbers();
})

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numbers () {
    for (let i = 0; i < 5; i++) {
        const number = generateRandomNumber(0, 99);
        let numberEl = document.querySelector(`.number-${i}`);
        numberEl.innerHTML = '';
        numberEl.append(number); 
    }
}