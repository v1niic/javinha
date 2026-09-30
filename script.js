// A soma de A + B menor que C.

function somaMaior() {
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
}

// Selecionar sexo, mostrar estado civil e tempo de casado.


function tempoCasamento() {
let nome = prompt("Digite o nome:");
let sexo = prompt("Digite o sexo (M/F):").toUpperCase();
let estadoCivil = prompt("Digite o estado civil:").toUpperCase();


if (sexo === "F" && estadoCivil === "CASADA") {
    let tempoCasada = prompt("Digite o tempo de casada (em anos):");
    alert(nome + ", você está casada há " + tempoCasada + " ano(s).");
} else {
    alert(nome + ", nenhuma informação adicional é necessária.");
}
}


// Mostra na tela se o número fornecido é impar ou par.


function imparPar() {
let numero = parseInt(prompt("Digite um número qualquer:"));


if (numero % 2 === 0) {
    alert("O número " + numero + " é PAR");
} else {
    alert("O número " + numero + " é ÍMPAR");
}
}


// A soma de A e B para resultar um valor ao C.


function valoresIguais() {
let valorA = parseInt(prompt("Digite o valor de A:"));
let valorB = parseInt(prompt("Digite o valor de B:"));


let resultado;


if (valorA === valorB) {
    resultado = valorA + valorB;
} else {
    resultado = valorA * valorB;
}

alert("O resultado é: " + resultado);
}


// Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado.


function valorPositivoNegativo() {
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
}


// Lê dois valores booleanos e verifica se ambos são Verdadeiros ou Falsos.


function valorBooleano() {
let valor1 = prompt("Digite o primeiro valor booleano (true/false):").toLowerCase() === "true";
let valor2 = prompt("Digite o segundo valor booleano (true/false):").toLowerCase() === "true";

if (valor1 && valor2) {
    alert("Os dois valores são VERDADEIROS.");
} else if (!valor1 && !valor2) {
    alert("Os dois valores são FALSOS.");
} else {
    alert("Os valores são diferentes: um é VERDADEIRO e o outro é FALSO.");
}
}


// Leia uma variável e some 5 se for par ou 8 se for ímpar.


function lerVariaveis() {
let numeroParImpar = parseInt(prompt("Digite um número: "));

if (numeroParImpar % 2 === 0) {
    let resultadoPar = numeroParImpar + 5;
    alert("O número é PAR. Resultado da operação: " + resultadoPar);
} else {
    let resultadoImpar = numeroParImpar + 8;
    alert("O número é ÍMPAR. Resultado da operação: " + resultadoImpar);
}
}


// Lê três valores inteiros e diferentes e mostra em ordem decrescente.


function ordenarDecrescentes() {
let valor1Decrescente = parseInt(prompt("Digite o primeiro valor inteiro: "));
let valor2Decrescente = parseInt(prompt("Digite o segundo valor inteiro: "));
let valor3Decrescente = parseInt(prompt("Digite o terceiro valor inteiro: "));

let maior = valor1Decrescente;
let meio = valor2Decrescente;
let menor = valor3Decrescente;

if (valor2Decrescente > maior) {
    maior = valor2Decrescente;
    meio = valor1Decrescente;
}

if (valor3Decrescente > maior) {
    maior = valor3Decrescente;
} else if (valor3Decrescente > meio) {
    meio = valor3Decrescente;
}

if (valor1Decrescente < maior && valor1Decrescente > meio) {
    menor = valor1Decrescente;
}

if (valor2Decrescente < maior && valor2Decrescente > meio) {
    menor = valor2Decrescente;
}

if (valor3Decrescente < maior && valor3Decrescente > meio) {
    menor = valor3Decrescente;
}

alert("Ordem decrescente: " + maior + ", " + meio + ", " + menor);
}


// Tendo como dados de entrada a altura e o sexo de uma pessoa, calcule o peso ideal.


function pesoIdeal() {
let altura = parseFloat(prompt("Digite a altura em metros: "));
let sexoPeso = prompt("Digite o sexo (H para homem ou M para mulher): ").toUpperCase();

let pesoIdeal;

if (sexoPeso === "H") {
    pesoIdeal = (72.7 * altura) - 58;
    alert("O peso ideal para o homem é: " + pesoIdeal.toFixed(2) + " kg");
} else if (sexoPeso === "M") {
    pesoIdeal = (62.1 * altura) - 44.7;
    alert("O peso ideal para a mulher é: " + pesoIdeal.toFixed(2) + " kg");
} else {
    alert("Sexo inválido. Digite H para homem ou M para mulher.");
}
}

// O IMC – Índice de Massa Corporal é um critério da Organização Mundial de Saúde para indicar a condição de peso de uma pessoa adulta.
// Fórmula: IMC = peso / (altura)^2.

function descobrirImc() {
let peso = parseFloat(prompt("Digite o peso em kg: "));
let altura = parseFloat(prompt("Digite a altura em metros: "));

if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Valores inválidos. Digite peso e altura positivos.");
    return;
}

let imc = peso / (altura * altura);
let condicao = "";

if (imc < 18.5) {
    condicao = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 25) {
    condicao = "Peso normal";
} else if (imc > 25 && imc <= 30) {
    condicao = "Acima do peso";
} else {
    condicao = "Obeso";
}

alert("IMC: " + imc.toFixed(2) + "\nCondição: " + condicao);
}

function ordenarDecrescente() {
    ordenarDecrescentes();
}


// Calcule o preço dos itens ao todo e a soma das parcelas.


function verDesconto() {
let precoEtiqueta = parseFloat(prompt("Digite o preço normal de etiqueta: "));
let codigoPagamento = parseInt(prompt("Digite o código de pagamento:\n1 - À vista em dinheiro ou cheque\n2 - À vista no cartão de crédito\n3 - Em duas vezes, sem juros\n4 - Em duas vezes, com juros de 10%"));

if (isNaN(precoEtiqueta) || isNaN(codigoPagamento) || precoEtiqueta <= 0) {
    alert("Valores inválidos. Digite um preço positivo e um código válido.");
    return;
}

let valorFinal;

switch (codigoPagamento) {
    case 1:
        valorFinal = precoEtiqueta * 0.90;
        alert("Pagamento: À vista em dinheiro ou cheque\nDesconto: 10%\nValor a pagar: R$ " + valorFinal.toFixed(2));
        break;
    case 2:
        valorFinal = precoEtiqueta * 0.85;
        alert("Pagamento: À vista no cartão de crédito\nDesconto: 15%\nValor a pagar: R$ " + valorFinal.toFixed(2));
        break;
    case 3:
        valorFinal = precoEtiqueta;
        alert("Pagamento: Em duas vezes, sem juros\nValor a pagar: R$ " + valorFinal.toFixed(2));
        break;
    case 4:
        valorFinal = precoEtiqueta * 1.10;
        alert("Pagamento: Em duas vezes, com juros de 10%\nValor a pagar: R$ " + valorFinal.toFixed(2));
        break;
    default:
        alert("Código de pagamento inválido.");
}
}

function verificarMedia() {
    alert("Questão 12 ainda não foi implementada.");
}


// 


function verificarMedia() {
let id = parseInt(prompt("Digite o identificador do aluno"));
let nota1 = parseFloat(prompt("Digite a nota do 1 verificação"));
let nota2 = parseFloat(prompt("Digite a nota do 2 verificação"));
let nota3 = parseFloat(prompt("Digite a nota do 3 verificação"));
let mediaExercicios = parseFloat(prompt("Digite a média dos exercicios"));
const mediaAproveitamento = (nota1 + (nota2 * 2) + (nota3 * 3 + mediaExercicios) /7) * 10;

switch  (true) {
case mediaAproveitamento >= 90:
    conceito = "A"
    break;
    case mediaAproveitamento >= 75 &&  mediaAproveitamento < 90:
        conceito = 'B'
        break;
case mediaAproveitamento >= 60 && mediaAproveitamento < 75:
    conceito = 'C'
    break;
    case mediaAproveitamento >= 40 && mediaAproveitamento < 60:
        conceito = 'D'
        break;
        case mediaAproveitamento < 40:
            default:
                alert("Impossivel calcular a média de aproveitamento do aluno!");
                return;
}
let resultado = ['A', 'B', 'C'].includes(conceito) ? "Aprovado" : "Reprovado";
alert(`
    ID do Aluno: ${id}
    Notas: {
    1A verificação: ${nota1}
    2A verificação: ${nota2}
    3A verificação: ${nota3}
    }
    Média dos exercícios: ${mediaExercicios} ,
    Média de aproveitamento: ${mediaAproveitamento.toFixed(2)},
    Conceito: ${conceito} => ${resultado}
    `)
}
