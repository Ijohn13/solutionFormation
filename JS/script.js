//compteur start
var n = 96; // Nombre final du compteur
var n2 = 97;
var cpt = -1; // Initialisation du compteur
var duree = 5; // Durée en seconde pendant laquel le compteur ira de 0 à n/n2
var delta = Math.ceil((duree * 1000) / n); // On calcule l'intervalle de temps entre chaque rafraîchissement du compteur (durée mise en milliseconde)
var node = document.getElementById("counter1"); // On récupère notre noeud où sera rafraîchi la valeur du compteur
var node2 = document.getElementById("counter2");

function countdown() {
    node.innerHTML = ++cpt;
    if (cpt < n) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
        setTimeout(countdown, delta);
    }
}

setTimeout(countdown, delta);

function countdown2() {
    node2.innerHTML = ++cpt;
    if (cpt < n2) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
        setTimeout(countdown2, delta);
    }
}

setTimeout(countdown2, delta);
//compteur end