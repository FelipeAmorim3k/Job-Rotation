let str = "Say my name"; // String a ser invertida
let invertedStr = ""; // String invertida

// Percorre a string da última para a primeira posição, adicionando cada caractere na string invertida
for (let i = str.length - 1; i >= 0; i--) {
  invertedStr += str[i];
}

console.log(invertedStr); // Imprime a string invertida
