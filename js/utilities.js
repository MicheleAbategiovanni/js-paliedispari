function resultPalindrome(arrayParola) {

    const strInversa = parola.split('').reverse().join('');

    if(parola == strInversa){
        return 'la parola è palindroma'
      } else {
        return 'la parola non è palindroma'
      }
    
}

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
