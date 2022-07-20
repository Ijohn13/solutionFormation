//========= ANIMATIONS ================================

//===========index.html - start =============
ScrollReveal({ distance: '300px' });
ScrollReveal().reveal('#logo', { origin: 'left' });
ScrollReveal({ distance: '700px' });
ScrollReveal().reveal('#navbarNavAltMarkup', { origin: 'right' });
ScrollReveal().reveal('#nameEnterprise', {
    delay: 700,
    distance: '100px',
    opacity: 0
})
ScrollReveal().reveal('#illustrationFormation', {
    delay: 1000,
    distance: '100px',
    opacity: 0
})
ScrollReveal().reveal('#buttonContact', {
    delay: 1200,
    distance: '100px',
    opacity: 0
})
ScrollReveal({distance: '100px', delay: 1200})
ScrollReveal().reveal('#paratopLeft', { origin: 'left' });
ScrollReveal().reveal('#parabottomRight', { origin: 'right'});
ScrollReveal().reveal('.card', { 
    delay: 1200,
    rotate: {
        x: 20,
        z: 20
    }
}, {delay: 1000});
ScrollReveal().reveal('#containerQualiopi', { scale: 0.85 });
ScrollReveal().reveal('#descriptionQualiopi', { delay: 700 });
ScrollReveal().reveal('#solutionFormationQualiopi', { delay: 700 });
ScrollReveal().reveal('#containerHandicapLogo', { delay: 700 });
ScrollReveal().reveal('#containerChoiceForamtion', { delay: 700 });
ScrollReveal().reveal('#containerForms', {
    distance: '100px',
    opacity: 0
});
ScrollReveal().reveal('#containerCounters', {afterReveal: showCounters});
//================= index.html - end =========

//================= presentation.html - start =================
ScrollReveal().reveal('#container-presentation', { origin: 'left'});
ScrollReveal().reveal('.para-presentation', { origin: 'right'});
ScrollReveal().reveal('#title-presentation', { origin: 'bottom'});
ScrollReveal().reveal('.para1', { origin: 'top'});
ScrollReveal().reveal('.para2', { origin: 'bottom'});

//===== START - COUNTER =============================

let n = 97; //Nombre final du compteur
let n2 = 96;
let cpt = 0; //Initialisation du compteur
let duration = 70
let node = document.getElementById("counter1");
let node2 = document.getElementById("counter2");
let containerCounters = document.getElementById("containerCounters");

function countdown() {
    node.innerHTML = ++cpt + " %";
    if (cpt < n) {
        setTimeout(countdown, duration);
    }
}

function countdown2() {
    node2.innerHTML = ++cpt + " %";
    if (cpt < n2) {
        setTimeout(countdown2, duration);
    }
}

function showCounters() {
        countdown();
        countdown2();
}

//============ END - COUNTER =============================

//============ SEND E-MAIL ===============================

$(document).ready(function() {
    $('form').validate();
})