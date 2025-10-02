var readlineSync = require('readline-sync');

let N1 = Number(readlineSync.question("Digite um número: "));

if (N1 < 5) {
    console.log("O número digitado foi: " + N1);
}
