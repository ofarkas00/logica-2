const readline = require ("readline")
const rl = readline.createInterface({
input: process.stdin, 
output: process.stdout
});
rl.question("Digite sua primeira nota", function (nota1){
rl.question("Digite sua segunda nota ", function (nota2){
rl.question("Digite sua terceira nota", function (nota3){
rl.question("Digite sua quarta nota", function(nota4){
    let media =  (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) /4
    if (media >= 7){
        console.log("Voce foi aprovado"); 
    }else{
        console.log("Voce foi reprovado");
        
       }
     });   
   });
  });
});