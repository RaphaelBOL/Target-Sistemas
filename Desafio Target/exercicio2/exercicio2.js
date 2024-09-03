// Função para verificar se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
  if (num < 0) return false;

  // Inicializando os primeiros números da sequência de Fibonacci
  let a = 0;
  let b = 1;

  // Caso especial onde o número é 0 ou 1, que pertencem à sequência
  if (num === a || num === b) return true;

  // Calcula a sequência de Fibonacci até que o valor supere o número informado
  let next = a + b;
  while (next <= num) {
    if (next === num) return true; // Se o número estiver na sequência, retorna verdadeiro
    a = b; // Atualiza o primeiro valor anterior
    b = next; // Atualiza o segundo valor anterior
    next = a + b; // Calcula o próximo valor da sequência
  }

  // Se o loop terminar sem encontrar o número, ele não pertence à sequência
  return false;
}

// Função para capturar o input e mostrar o resultado
function checkFibonacci() {
  const number = parseInt(document.getElementById("numberInput").value);
  const resultElement = document.getElementById("resultado"); // Alterado para "resultado"

  // Verifica se o input é um número válido
  if (isNaN(number)) {
    resultElement.textContent = "Por favor, insira um número válido.";
    return;
  }

  // Chama a função e exibe o resultado
  if (isFibonacci(number)) {
    resultElement.textContent = `O número ${number} pertence à sequência de Fibonacci.`;
  } else {
    resultElement.textContent = `O número ${number} não pertence à sequência de Fibonacci.`;
  }
}
