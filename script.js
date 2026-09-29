// A soma de A + B menor que C.

let A = parseFloat(prompt("Digite o valor de A:"));
let B = parseFloat(prompt("Digite o valor de B:"));
let C = parseFloat(prompt("Digite o valor de C:"));

let soma = A + B;

if (soma < C) {
    alert("A soma de A + B é MENOR que C");
    console.log("A soma de A + B é MENOR que C");
} else {
    alert("A soma de A + B NÃO é menor que C");
}

// Selecionar sexo, mostrar estado civil e tempo de casado.

let nome = prompt("Digite o nome:");
let sexo = prompt("Digite o sexo (M/F):").toUpperCase();
let estadoCivil = prompt("Digite o estado civil:").toUpperCase();


if (sexo === "F" && estadoCivil === "CASADA") {
    let tempoCasada = prompt("Digite o tempo de casada (em anos):");
    alert(nome + ", você está casada há " + tempoCasada + " ano(s).");
} else {
    alert(nome + ", nenhuma informação adicional é necessária.");
}


// Mostra na tela se o número fornecido é impar ou par.

let numero = parseInt(prompt("Digite um número qualquer:"));


if (numero % 2 === 0) {
    alert("O número " + numero + " é PAR");
} else {
    alert("O número " + numero + " é ÍMPAR");
}


// A soma de A e B para resultar um valor ao C.

let valorA = parseInt(prompt("Digite o valor de A:"));
let valorB = parseInt(prompt("Digite o valor de B:"));


let resultado;


if (valorA === valorB) {
    resultado = valorA + valorB;
} else {
    resultado = valorA * valorB;
}

alert("O resultado é: " + resultado);


// Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado.


let numeroOperacao = parseFloat(prompt("Digite um número qualquer:"));


let resultadoOperacao;


if (numeroOperacao > 0) {
    resultadoOperacao = numeroOperacao * 2;
    alert("O número é POSITIVO. O dobro é: " + resultadoOperacao);
} else if (numeroOperacao < 0) {
    resultadoOperacao = numeroOperacao * 3;
    alert("O número é NEGATIVO. O triplo é: " + resultadoOperacao);
} else {
    alert("O número é ZERO. Não se aplica dobro nem triplo.");
}