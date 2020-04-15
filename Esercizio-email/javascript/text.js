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

for(var counter = 0; counter < listaEmail.length; counter++) {
    console.log(listaEmail[counter]);

    if (richiestaEmail == listaEmail[counter]) {
        alert("Compliments! Accesso consentito :)");
    } 
}

