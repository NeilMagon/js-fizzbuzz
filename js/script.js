// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero
//  e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// selezione il container
const numContainer = document.querySelector(`#container`);
console.log(container)
// creo tutti i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
    const newBox = document.createElement(`div`)
    // creo la variabile classText
    let classText;
    console.log(classText);
    // creo la variabile fizzBuzz
    let fizzBuzz = i;
    // se diviso per 3 e 5 da riporto 0 scrive FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzz = `fizzbuzz`;
        classText = `fizzbuzz`;
        // se diviso per 3 da riporto 0 scrive Fizz
    } else if (i % 3 === 0) {
        fizzBuzz = `fizz`;
        classText = `fizz`;
        // se diviso per 5 da riporto 0 scrive Buzz
    } else if (i % 5 === 0) {
        fizzBuzz = `buzz`;
        classText = `buzz`;
    } else {
        classText = ``;
    }
    console.log(fizzBuzz);

    const numberBox = `<div class="box ${classText}">${fizzBuzz}</div>`;
    console.log(numberBox)

    numContainer.innerHTML += numberBox;

    // const numberBox = document.createElement('div');

    // numberBox.innerHTML = fizzBuzz;
    // numberBox.classList.add('box');
    // numberBox.classList.add(classText);
    // console.log(numberBox);

    // numContainer.append(numberBox)
}




