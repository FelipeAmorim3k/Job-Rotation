// Função que verifica se um número está na sequência de Fibonacci
function verificaFibonacci(num) {
    let a = 0;
    let b = 1;
    let fibonacci = [];
  
    while (b <= num) {
      fibonacci.push(b);
      let temp = b;
      b = a + b;
      a = temp;
    }
  
    if (fibonacci.includes(num)) {
      return `O número ${num} está na sequência de Fibonacci!`;
    } else {
      return `O número ${num} não está na sequência de Fibonacci.`;
    }
  }
  
  // Exemplo de uso da função com o número 13
  console.log(verificaFibonacci(13));