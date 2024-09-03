// Função para carregar o JSON e realizar a análise
function analisarFaturamento() {
  fetch('faturamento.json') // Carrega o arquivo JSON
      .then(response => response.json()) // Converte para JSON
      .then(faturamentoDiario => {
          // Filtra os dias com faturamento maior que zero
          const diasComFaturamento = faturamentoDiario.filter(dia => dia.valor > 0);

          // Calcula o menor e o maior valor de faturamento
          const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
          const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

          // Calcula a média mensal, ignorando dias sem faturamento
          const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
          const mediaMensal = somaFaturamento / diasComFaturamento.length;

          // Conta os dias com faturamento acima da média
          const diasAcimaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

          // Exibe os resultados
          document.getElementById('menor').textContent = `Menor valor de faturamento: R$ ${menorFaturamento}`;
          document.getElementById('maior').textContent = `Maior valor de faturamento: R$ ${maiorFaturamento}`;
          document.getElementById('diasAcimaMedia').textContent = `Número de dias com faturamento acima da média: ${diasAcimaMedia}`;
      })
      .catch(error => {
          console.error('Erro ao carregar o JSON:', error);
      });
}