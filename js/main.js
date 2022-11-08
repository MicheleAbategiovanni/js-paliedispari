const parola = prompt("Inserisce la parola da analizzare: ");


function resultPalindrome(arrayParola) {

    const strInversa = parola.split('').reverse().join('');

    if(parola == strInversa){
        return 'la parola è palindroma'
      } else {
        return 'la parola non è palindroma'
      }
    
}

const result = resultPalindrome(parola);

console.log(result)


