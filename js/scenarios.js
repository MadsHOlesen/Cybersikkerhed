'use strict';

// BUTTON EKSEMPEL

/*
// MANUEL erklæring af variabler
const c1 = document.querySelector('#c1'); // Gemmer elementet, der har id="c1". Datatype: Object
const c2 = document.querySelector('#c2'); // Gemmer elementet, der har id="c2". Datatype: Object
const c3 = document.querySelector('#c3'); // Gemmer elementet, der har id="c3". Datatype: Object
*/

// NODELIST / ARRAY
const btns = document.querySelectorAll('.btn-group button');
const boxes = document.querySelectorAll('.feedback');
const choices = [];  // Array til id på knappen, der er blevet klikket

// FUNCTION
const checkAnswer = (e) => { // Funktion med en parameter (e)
    boxes.forEach(box => {
        box.style.display = 'none';
    })
    choices.push(e.target.id); // Gemmer id i choices arrayet
    console.log(choices); //Logger choices arrayet

    switch (e.target.id) { // Forholder sig til det klikkede elements id
        case 'c1': 
            document.querySelector('#c1-f').style.display = 'block'; // Viser elementet med id="c1-f" 
        break;
        case 'c2': 
            document.querySelector('#c2-f').style.display = 'block';
        break;
        case 'c3':
            document.querySelector('#c3-f').style.display = 'block'; // Viser elementet med id="c3-f"
        break;
        case 'c1-1':
            document.querySelector('#c1-1f').style.display = 'block'; //Phising
            break; 
        case 'c1-2':
            document.querySelector('#c1-2f').style.display = 'block'; //Phising
            break;
        case 'c1-3':
            document.querySelector('#c1-3f').style.display = 'block'; //Phising
            break; 
        case 'c2-1':
            document.querySelector('#c2-1f').style.display = 'block'; //Ransomware
            break; 
        case 'c2-2':
            document.querySelector('#c2-2f').style.display = 'block'; //Ransomware
            break;
        case 'c2-3':
            document.querySelector('#c2-3f').style.display = 'block'; //Ransomware
            break; 
        case 'c3-1':
            document.querySelector('#c3-1f').style.display = 'block'; //Tracking-Cookies
            break; 
        case 'c3-2':
            document.querySelector('#c3-2f').style.display = 'block'; //Tracking-Cookies
            break;
        case 'c3-3':
            document.querySelector('#c3-3f').style.display = 'block'; //Tracking-Cookies
            break; 
        default: console.log("Error"); // Viser error, hvis id ikke findes
        
       

    }
}

let zoomTexts = document.querySelectorAll(".svar-k, .svar-f"); // Zoom ind og ud

    setInterval(() => {
      zoomTexts.forEach((text) => {
        text.style.transform = text.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)';
      });
    }, 500);

/*
// MANUEL tilføjelse af event listeners
c1.addEventListener('click', checkAnswer); // Kalder funktionen checkAnswer() ved klik på knappen med id="c1"
c2.addEventListener('click', checkAnswer); // Kalder funktionen checkAnswer() ved klik på knappen med id="c2"
c3.addEventListener('click', checkAnswer); // Kalder funktionen checkAnswer() ved klik på knappen med id="c3"
*/

// FOREACH ITERATION METHOD tilføjelse af event listeners
btns.forEach(btn => {
    btn.addEventListener('click', checkAnswer);
})

/*
// FOR LOOP - kan bruges i stedet for FOREACH ITERATION METHOD - tilføjelse af event listeners
for(let i = 0; i < btns.length; i++ ) {
    btns[i].addEventListener('click', checkAnswer);
}
*/