
// Função original 
function gerarAleatoriosOriginal(qtd = 6) {
    var vetor = [];
    while (vetor.length < qtd) {
        var aleatorio = Math.floor(Math.random() * 60 + 1);
        if (!vetor.includes(aleatorio)) {
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

// Função para medir o tempo de execução 
function tempoExecucao(funcao) {
    const inicio = performance.now();
    funcao();
    const fim = performance.now();
    return fim - inicio;
}


const tempoOriginal = tempoExecucao(() => gerarAleatoriosOriginal(50));
const tempoOtimizadoComSet = tempoExecucao(() => gerarAleatoriosOtimizadoComSet(50));

const melhoria = ((tempoOriginal - tempoOtimizadoComSet) / tempoOriginal) * 100;


console.log(`Tempo Original: ${tempoOriginal.toFixed(2)} ms`);
console.log(`Tempo Otimizado com Set: ${tempoOtimizadoComSet.toFixed(2)} ms`);
console.log(`Melhoria com Set: ${melhoria.toFixed(2)}%`);
