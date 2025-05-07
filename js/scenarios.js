'use strict';

// NODELIST / ARRAY
const btns = document.querySelectorAll('.btn-group button');
const boxes = document.querySelectorAll('.feedback');
const choices = [];  

// KNAPPPER / ARRAY
const checkAnswer = (e) => { 
    boxes.forEach(box => {
        box.style.display = 'none';
    })
    choices.push(e.target.id); 
    console.log(choices); 
    localStorage.setItem('Dine svar', choices ); //localStorage 
    switch (e.target.id) {
        case 'c1': 
            document.querySelector('#c1-f').style.display = 'block'; //Start
        break;
        case 'c2': 
            document.querySelector('#c2-f').style.display = 'block'; //Start
        break;
        case 'c3':
            document.querySelector('#c3-f').style.display = 'block'; //Start
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
        default: console.log("Error"); 
        
    }
}

localStorage.getItem('Dine svar') || 'ingen registrering'; //localStorage 

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

