/* scaletta task:
1- creare un array con diverse e-mail;
2- creare prompt per chiedere email all'utente;
3- stampare un messaggio (alert) sia nel caso che si possa eseguire l'accesso che il caso contrario; */

var richiestaEmail= prompt("Inserisci la tua e-mail");

var listaEmail = [
    "sabrinagalesi@gmail.com",
    "nikolasmosca@gmail.com",
    "angelamessina@gmail.com",
    "carminemosca@gmail.com",
    "rosavalenti@gmail.com",
    "massimogalesi@gmail.com",
];

//Variabile che controlla se ho trovato la mia email
var trovato = false; //Diamo come valore di default che non l'abbiamo trovato
var counterTotali = 0; //Numero degli elementi totali esaminati 
var counterNonTrovati = 0; //Numero di email non uguali a quella cercata

//Listiamo il nostro array...
for(var counter = 0; counter < listaEmail.length; counter++) {
    console.log(listaEmail[counter]);

    //Effettuo il controllo se è la mia email inserita!
    if (richiestaEmail == listaEmail[counter]) {
        trovato = true;
    } else {
        //Se non l'ho trovata incremento il mio counter 
        counterNonTrovati++;
    }

    counterTotali++;
}

//Stampa su html 
var coloreAccesso = document.getElementById("stampa-email");

if (trovato == true) { //oppure if(trovato)
    coloreAccesso.innerHTML = "Compliments! Accesso consentito :)";
    coloreAccesso.className = "verde";
} else {
    coloreAccesso.innerHTML = "Peccato! Accesso nekkato xD"
    coloreAccesso.className = "rosso";
}

document.getElementById("spazio").innerHTML= counterTotali;
document.getElementById("spazio-2").innerHTML = counterNonTrovati;

/*Scrivere il numero degli elementi esaminati nel for che NON erano 
  corrispondenti alla tua email digitata */

