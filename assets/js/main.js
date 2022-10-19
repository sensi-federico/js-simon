// Descrizione:



// 1- Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. 

// creo una funzione che assegno al bottone
// genero i numeri e li stampo tramite un for
const buttonEl = document.querySelector('.btn');
const buttonReload = document.querySelector('.reload');
const containerEl = document.querySelector('.container');

buttonEl.addEventListener('click', function () {
    buttonEl.style.display = 'none';
    numbers();
    setTimeout(timer, 1000);
    setTimeout(userInteract, 1000);
})

buttonReload.addEventListener('click', function(){
    location.reload();
})

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numbers() {
    for (let i = 0; i < 5; i++) {
        const number = generateRandomNumber(0, 99);
        let numberEl = document.querySelector(`.number-${i}`);
        numberEl.innerHTML = '';
        numberEl.append(number);
    }
}

// 2- Dopo 30 secondi i numeri scompaiono e l'utente deve inserire uno alla volta,
// i numeri che ha visto precedentemente, tramite il prompt(). 

function timer() {
    containerEl.style.display = 'none';
    buttonReload.style.display = 'block';
}

function userInteract () {
    const userNumbList = [];
    for (let i = 0; i < 5; i++){
        const userNumber = Number(prompt('Inserisci un numero!'));
        userNumbList.push(userNumber);
    } 
    console.log(userNumbList);
    // const numbList = document.querySelectorAll('[class^="number-"]').innerHTML;
    // console.log(numbList)
    const numberList = [];

    for (let i = 0; i < 5; i++){
        let numbRight = document.querySelector(`.number-${i}`).innerHTML;
        numberList.push(Number(numbRight));
    }
    console.log(numberList)

    
}


// 3- Dopo che sono stati inseriti i 5 numeri 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.
