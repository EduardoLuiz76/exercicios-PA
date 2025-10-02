var readlineSync =
require('readline-sync');

let N1 =
Number(readlineSync.question("digite o primeiro numero "));
let N2 =
Number(readlineSync.question("digite o segundo numero "));

let resultado = (N1 - N2) + 10;

console.log("Resultado: " + resultado);