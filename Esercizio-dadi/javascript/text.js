var dado = [1,2,3,4,5,6];

var numeroRichiesto = prompt("Scrivi un numero da 1 a 6!");

var numeroCasuale= Math.floor(Math.random(1) * 6) + 1;

console.log(numeroCasuale);

if(numeroRichiesto > numeroCasuale) {
    alert("Hai vinto!");
} else if (numeroRichiesto < numeroCasuale) {
    alert("Hai perso!");
} else {
    alert("Pareggio!");
}