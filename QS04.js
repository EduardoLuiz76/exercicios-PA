var readlineSync = require('readline-sync');

let N1 = Number(readlineSync.question("Digite o primeiro número: "));
let N2 = Number(readlineSync.question("Digite o segundo número: "));
let N3 = Number(readlineSync.question("Digite o terceiro número: "));

N1 = N1 + 5;
N2 = N2 + 5;
N3 = N3 + 5;

if (N1 > 10) console.log("N1 = " + N1);
if (N2 > 10) console.log("N2 = " + N2);
if (N3 > 10) console.log("N3 = " + N3);
