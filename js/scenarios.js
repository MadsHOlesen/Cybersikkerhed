'use strict';

// NODELIST / ARRAY
const btns = document.querySelectorAll('.btn-group button');
const boxes = document.querySelectorAll('.feedback');
const choices = [];  

// KNAPPER
const checkAnswer = (e) => { 
    boxes.forEach(box => {
        box.style.display = 'none';
    });
    const valgtId = e.target.id;
    const valgtTekst = e.target.textContent;
    
    choices.push(valgtId);
    localStorage.setItem('Dine svar', JSON.stringify(choices)); //Gemmer brugerens svar i localStorage

    switch (valgtId) {
        case 'c1': 
            document.querySelector('#c1-f').style.display = 'block'; // Phising
            break;
        case 'c2': 
            document.querySelector('#c2-f').style.display = 'block'; // Ransomware
            break;
        case 'c3':
            document.querySelector('#c3-f').style.display = 'block'; // Tracking-cookies
            break;

        // Phishing svar
         case 'c1-1':
            visFeedbackMedValg('#c1-1f', valgtTekst); // Korrekt
            break; 
        case 'c1-2':
            visFeedbackMedValg('#c1-2f', valgtTekst); // Forkert
            break;
        case 'c1-3':
            visFeedbackMedValg('#c1-3f', valgtTekst); // Korrekt
            break; 

        // Ransomware svar
        case 'c2-1':
            visFeedbackMedValg('#c2-1f', valgtTekst); // Forkert
            break; 
        case 'c2-2':
            visFeedbackMedValg('#c2-2f', valgtTekst); // Korrekt
            break;
        case 'c2-3':
            visFeedbackMedValg('#c2-3f', valgtTekst); // Korrekt
            break; 

        // Tracking-Cookies svar
        case 'c3-1':
            visFeedbackMedValg('#c3-1f', valgtTekst); // Korrekt
            break; 
        case 'c3-2':
            visFeedbackMedValg('#c3-2f', valgtTekst); // Korrekt
            break;
        case 'c3-3':
            visFeedbackMedValg('#c3-3f', valgtTekst); // Forkert
            break; 
            console.log("Ugyldigt valg");
    }
};

// Funktion til "du valgte".
function visFeedbackMedValg(selector, tekst) {
    const box = document.querySelector(selector);
    if (box) {
        box.style.display = 'block';
        const span = box.querySelector('.valg-tekst');
        if (span) {
            span.textContent = tekst;
        }
    }
}

// ZOOM
let zoomTexts = document.querySelectorAll(".svar-k, .svar-f"); 

    setInterval(() => {
      zoomTexts.forEach((text) => {
        text.style.transform = text.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)';
      });
    }, 500);


btns.forEach(btn => {
    btn.addEventListener('click', checkAnswer);
})

