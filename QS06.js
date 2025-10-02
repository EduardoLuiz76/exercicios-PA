var readlineSync =
require('readline-sync');

let N1 =
Number(readlineSync.question("digite o primeiro numero: "));
let N2 =
Number(readlineSync.question("digite o segundo numero: "));

N1 = N1 - 3;
N2 = N2 + 2;

let resultado = (N1 + N2) - 1;

console.log("resultado: " + resultado);
