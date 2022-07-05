Descrizione:
// Visualizzare in pagina 5 numeri casuali  diversi tra loro. 
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, 
// i numeri che ha visto precedentemente, tramite i prompt().
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.


function getUniqueRandomNumbers(min, max, tot) {
    const numbers = []
    while (numbers.length < tot) {
        const randomNumber = Math.floor(Math.random() * (max + 1 - min) + min)
        if (!numbers.includes(randomNumber)) numbers.push(randomNumber)
    }
    return numbers;
}

function getUserNumber(min, max) {
    let userNumber;
    while (isNaN(userNumber) || userNumber < min || userNumber > max) {
        userNumber = parseInt(prompt(`inserisci un numero tra ${min} e ${max}`))
    }
    return userNumber
}

// recupero gli elementi dal DOM
const countdownElement = document.getElementById('countdown');
const numbersElement = document.getElementById('numbers-list');


// assegno le variabili utili
const min = 1;
const max = 100;
const totalNumbers = 5;
let time = 5;

// genero i 5 numeri casuali con la funzione creata sopra
const numbers = getUniqueRandomNumbers(min, max, totalNumbers)
console.log(numbers)


// stampo in pagina
let items = '';
for (let i = 0; i < totalNumbers; i++) {
    items += `<li>${numbers[i]}</li>`
}

numbersElement.innerHTML = items;

const countdown = setInterval(() => {
    if (time === 0) clearInterval(countdown);
    else countdownElement.innerText = --time;
}, 1000);

// dopo i 30 secondi cancello i numeri dalla pagina
setTimeout(() => {
    numbersElement.className = 'hidden';
}, 30000);

// chiedo i numeri all'utente
setTimeout(() = => {

    const userNumbers = [];
    while (userNumbers.length < totalNumbers) {
        const userNumber = getUserNumber(min, max);
        if (!userNumbers.includes(userNumber)) userNumbers.push(userNumber);
    }


    let correctAnswers = [];
    for (let i = 0; i < totalNumbers; i++) {
        if (numbers.includes(userNumbers[i])) correctAnswers.push(userNumbers[i]);
    }

    alert(`Hai totalizzato ${correctAnswers.length} punti! (hai indovinato ${correctAnswers})`)


}, 30200)