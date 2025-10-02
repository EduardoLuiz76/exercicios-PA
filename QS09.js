var readlineSync = require('readline-sync');

let a = Number(readlineSync.question("Digite o primeiro número: "));
let b = Number(readlineSync.question("Digite o segundo número: "));
let c = Number(readlineSync.question("Digite o terceiro número: "));
let d = Number(readlineSync.question("Digite o quarto número: "));

let soma1 = a + b;
let soma2 = c + d;

if (soma1 < soma2) {
    console.log("Correção está certa");
} else {
    console.log("Correção está errada");
}
