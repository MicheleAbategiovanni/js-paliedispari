const parDisparSelections = prompt("Scegli pari o dispari: ");
const numberUsers = parseInt(prompt("Scegli un numero da 1 a 5"));
const numberCPU = generateRandomNumber();
const sommaNumber = getPariDispari(numberUsers, numberCPU);

console.log(`Hai scelto : ${parDisparSelections}`);

console.log(`Numero scelto: ${numberUsers}`);

console.log(`Il numero generato per la CPU è : ${numberCPU}`);

console.log(`La somma da come risultato: ${sommaNumber}`);

if(parDisparSelections=="pari" && sommaNumber=="pari"){
    console.log("HAI VINTO");
} else{
    console.log("HAI PERSO");
}

