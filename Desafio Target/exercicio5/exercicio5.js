        // Função para inverter a string manualmente
        function inverterString() {
          const input = document.getElementById('inputString').value;
          let stringInvertida = '';

          // Percorre a string de trás para frente e constrói a string invertida
          for (let i = input.length - 1; i >= 0; i--) {
              stringInvertida += input[i];
          }

          // Exibe o resultado
          document.getElementById('resultado').textContent = `String invertida: ${stringInvertida}`;
      }