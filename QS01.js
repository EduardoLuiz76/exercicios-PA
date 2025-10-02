var readlineSync = require('readline-sync');

let N1 = Number(readlineSync.question("Digite o primeiro número: "));
let N2 = Number(readlineSync.question("Digite o segundo número: "));

if (N1 < N2) {
    console.log("O menor número é: " + N1);
} else {
    console.log("O menor número é: " + N2);
}
