var readlineSync =
require('readline-sync');

let N1 =
Number(readlineSync.question("Digite o primeiro número: "));
let N2 =
Number(readlineSync.question("Digite o segundo número: "));

N1 = N1 + 2;
N2 = N2 + 2;

console.log("Novo valor de N1: " + N1);
console.log("Novo valor de N2: " + N2);