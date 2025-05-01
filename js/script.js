'use strict';

// Variabler
var myVariable = "Hello World"; // Ældre syntaks. Datatype: String

let bottleContent = "Water"; // Erklæring af variabel med tildeling af værdi. Værdien kan ændres. Datatype: String
bottleContent = "Juice"; // Tildeling af ny værdi. Datatype: String

let myFloat = 0.56; // Datatype: Number

let isSunny = true; // Datatype: Boolean
let isRainy = false; // Datatype: Boolean

const body = document.body; // Erklæring af variabel med tildeling af værdi. Værdien kan ikke ændres. Datatype: Object

let question = "What's your name?"; // Erklæring af variabel med tildeling af værdi. Værdien kan ændres. Datatype: String
let quote = `"I have not failed, I have just found 10.000 ways that won't work"`; // Erklæring af variabel med tildeling af værdi, der indeholde både enkelte og dobbelte citationstegn. Værdien kan ændres. Datatype: String

let noValue = null; // Datatype: Object

// CONDITIONAL STATEMENTS

if (isSunny) { // Hvis værdien af variablen isSunny er true
    console.log("Condition #1 was met");
} else if (isRainy) { // Hvis værdien af variablen isSunny er false, men isRainy er true
    console.log("Condition #2 was met");
} else { // Hvis hverken værdien af isSunny eller isRainy er true
    console.log("No conditions were met")
}

let dice; // Erklæring af variabel uden tildeling af værdi. Datatype: Undefined
dice = Math.floor(Math.random() * 6) + 1; // Tildeling af værdi. Math.floor() runder ned til nærmeste heltal, Math.random() generer et tilfældigt kommatal mellem 0-1 (0 inklusiv, 1 eksklusiv). Datatype: Number

switch(dice) {
    case 1: console.log('One'); // Hvis værdien af dice-variablen er 1
    break;
    case 2: console.log('Two'); // Hvis værdien af dice-variablen er 2
    break;
    case 3: console.log('Three'); // Hvis værdien af dice-variablen er 3
    break;
    case 4: console.log('Four'); // Hvis værdien af dice-variablen er 4
    break;
    case 5: console.log('Five'); // Hvis værdien af dice-variablen er 5
    break;
    case 6: console.log('Six'); // Hvis værdien af dice-variablen er 6
    break;
    default: console.log('Error'); // Hvis værdien af dice-variablen ikke er et tal mellem 1-6
}

// Button eksempel
const c1 = document.querySelector('#c1'); // Gemmer elementet, der har id="c1". Datatype: Object
const c2 = document.querySelector('#c2'); // Gemmer elementet, der har id="c2". Datatype: Object
const c3 = document.querySelector('#c3'); // Gemmer elementet, der har id="c3". Datatype: Object

const checkAnswer = (e) => { // Funktion med en parameter (e)
    if (e.target.id !== 'c1') { // Hvis elementet, der blev klikket på, ikke har id="c1"
        console.log('Correct');
    } else { // Hvis elementet, der blev klikket på, har id="c1"
        console.log('Incorrect');
    }
}

c1.addEventListener('click', checkAnswer); // Kalder funktionen checkAnswer() ved klik på knappen med id="c1"
c2.addEventListener('click', checkAnswer); // Kalder funktionen checkAnswer() ved klik på knappen med id="c2"
c3.addEventListener('click', checkAnswer); // Kalder funktionen checkAnswer() ved klik på knappen med id="c3"


const colors = ['red', 'green', 'blue'];
console.log(colors); // Hele arrayet
console.log(colors[0]); // Første element i arrayet
console.log(colors.length); // Antal af elementer i arrayet
colors[0] = 'yellow'; // Tildeling af ny værdi
console.log(colors[0]); // Første element i arrayet
colors.pop(); // Fjerner det sidste element i arrayet
colors[3] = 'purple'; // Nyt element på 4. plads i arrayet
console.log(colors);
colors.splice(1,2); // Fjerner element(er) i arrayet startende fra i det her tilfælde 1 til derfra 2 elementer.
console.log(colors);
colors.push('pink');
console.log(colors);

colors.forEach((color, index) => {
    console.log(color, index);
})