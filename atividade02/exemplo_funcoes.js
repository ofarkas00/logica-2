// function expression - valor Base
const calcularValorBase =  function(horas, precoHora){
    return horas * precoHora;
}
// 2. arrow functiop - adicionar taxa
const adicionarTaxa = (valor) => valor + 2.00; 

// function declaration - Exibir Recibo
function emitirRecibo (totalFinal){
    console.log("--- Estacionamento --");
    //toFixed para colocar so 2 numeros decimais depois da virgula
    console.log("Total a pagar R$ " + totalFinal.toFixed(2));
  
}
//4 execução
let valorBruto = calcularValorBase(3, 10);
let valorComTaxa = adicionarTaxa(valorBruto);
emitirRecibo(valorComTaxa);

