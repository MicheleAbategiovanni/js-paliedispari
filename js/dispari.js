const parDisparSelections = prompt("Scegli pari o dispari: ");
const numberUsers = parseInt(prompt("Scegli un numero da 1 a 5"));

console.log(`Hai scelto : ${parDisparSelections}`);
console.log(`Numero scelto: ${numberUsers}`);

function generateRandomNumber() {

    const numCPU = Math.floor(Math.random() * 5) + 1;

    return numCPU;
}

function getPariDispari(num1, num2) {

    const somma = num1 + num2;

    if (somma % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }

}

const numberCPU = generateRandomNumber();

console.log(`Il numero generato per la CPU è : ${numberCPU}`);

const sommaNumber = getPariDispari(numberUsers, numberCPU);

console.log(`La somma da come risultato: ${sommaNumber}`);

if(parDisparSelections=="pari" && sommaNumber=="pari"){
    console.log("HAI VINTO");
} else{
    console.log("HAI PERSO");
}

