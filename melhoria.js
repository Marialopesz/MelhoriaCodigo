// Função original
function gerarAleatoriosOriginal(qtd = 6) {
  var vetor = [];
  while (vetor.length < qtd) {
    var aleatorio = Math.floor(Math.random() * 60 + 1);
    if (vetor.includes(aleatorio)) {
      continue;
    }
    {
      vetor.push(aleatorio);
    }
  }
  return vetor;
}

// Função otimizada
function gerarAleatoriosOtimizadoComSet(qtd = 6, max = 60) {
  const numerosAleatorios = new Set();
  while (numerosAleatorios.size < qtd) {
    numerosAleatorios.add(Math.floor(Math.random() * max) + 1);
  }
  return Array.from(numerosAleatorios);
}

// Função para medir o tempo médio de várias execuções
function tempoExecucaoMedio(funcao, qtdExecucoes = 100, qtdNumeros = 50) {
  let totalTempo = 0;

  for (let i = 0; i < qtdExecucoes; i++) {
    const inicio = performance.now();
    funcao(qtdNumeros);
    const fim = performance.now();
    totalTempo += fim - inicio;
  }

  return totalTempo / qtdExecucoes;
}

// Executar a função várias vezes para obter a média
const execucoes = 1000;
const tempoOriginalMedio = tempoExecucaoMedio(
  gerarAleatoriosOriginal,
  execucoes
);
const tempoOtimizadoComSetMedio = tempoExecucaoMedio(
  gerarAleatoriosOtimizadoComSet,
  execucoes
);

const melhoriaMedio =
  ((tempoOriginalMedio - tempoOtimizadoComSetMedio) / tempoOriginalMedio) * 100;

console.log(
  `Tempo Médio - Função Original: ${tempoOriginalMedio.toFixed(5)} ms`
);
console.log(
  `Tempo Médio - Função Otimizada com Set: ${tempoOtimizadoComSetMedio.toFixed(
    5
  )} ms`
);
console.log(`Melhoria Percentual com Set: ${melhoriaMedio.toFixed(2)}%`);
