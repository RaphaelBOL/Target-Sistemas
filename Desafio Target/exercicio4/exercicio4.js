function calcularPercentuais() {
  // Dados de faturamento mensal por estado
  const faturamento = {
      SP: 67836.43,
      RJ: 36678.66,
      MG: 29229.88,
      ES: 27165.48,
      Outros: 19849.53
  };

  // Calcula o valor total de faturamento
  const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

  // Calcula o percentual de representação de cada estado
  const percentuais = {};
  for (const estado in faturamento) {
      percentuais[estado] = (faturamento[estado] / totalFaturamento * 100).toFixed(2);
  }

  // Exibe os resultados
  const resultadosDiv = document.getElementById('resultados');
  resultadosDiv.innerHTML = "<h2>Percentual de representação por estado:</h2>";

  for (const estado in percentuais) {
      const p = document.createElement('p');
      p.textContent = `${estado}: ${percentuais[estado]}%`;
      resultadosDiv.appendChild(p);
  }
}