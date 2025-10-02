var readlineSync =
require('readline-sync');

let N1 =
Number(readlineSync.question("digite o primeiro numero: "));
let N2 =
Number(readlineSync.question("digite o segundo numero: "));

N1 = N1 + 10;
N2 = N2 / 2;

console.log("resultado do primeiro numero: " + N1);
console.log("resultado do segundo numero: " + N2);