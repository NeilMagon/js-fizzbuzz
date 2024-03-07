// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero
//  e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// selezione il container
const container = document.querySelector(`#container`);
console.log(container)
// creo tutti i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    console.log(i)
    // creo la variabile fizzBuzz
    let fizzBuzz;
    // se diviso per 3 e 5 da riporto 0 scrive FizzBuzz
    if (i % 3 === 0 & i % 5 === 0) {
        fizzBuzz = `FizzBuzz`;
        // se diviso per 3 da riporto 0 scrive Fizz
    } else if (i % 3 === 0) {
        fizzBuzz = `Fizz`;
        // se diviso per 5 da riporto 0 scrive Buzz
    } else if (i % 5 === 0) {
        fizzBuzz = `Buzz`;
    }
    console.log(fizzBuzz)
}
const numberBox = `<div class="box ${fizzBuzz}">${i}</div>`;

container.innerHTML += numberBox;

