// Funções
// Modularizar o código

// function NOME(ARG1, ARG2, ARGN...) {}

// Parametros/argumentos são opcionais
function digaOi() {
    console.log('Oi! tudo bem?');
}

// EXECUTAR/INVOCAR/CHAMAR
digaOi();
digaOi();

// Argumentos

// Os parametros podem ser de qualquer tipo
function soma(a, b) {
    const soma = a + b;

    console.log(`Soma: ${soma}`);
}

soma(2,4);
soma(8, 20);

// Return -> o retorno de dados de uma função
// return x

function multiplicacao(a, b) {
    const mult = a * b;

    return mult;
}

const resultado = multiplicacao(2, 2);

console.log(resultado);

const somaDois = resultado + 10;

console.log(somaDois);

// A funçao
// - Não precisa de parametro
// - Não precisa de retorno

// Função anonima (função Imutável)
const saudacao = function(nome) {
    console.log(`Olá ${nome}`);
}

saudacao('Endryus')

// Função anonima 2: callback - usando um funçao dentro de outra
// é executar uma função como argumento
function operacao(a, b, callback) {
    return callback(a, b);
}

let resultadoOperacao = operacao(10, 8, soma);

console.log(resultadoOperacao);

let resultadoDois = operacao(5, 5, function(x, y) {
    return x - y;
})

console.log(resultadoDois);

// Arrow functions ou Funções de flecha
// com uma sintaxe menor

// (arg1, arg2) => {}
const dividir = (a, b) => {
    return a / b;
}

console.log(dividir(10,5));

const multiplicacaoArrow = (a, b) => a * b;

// quando ela só tem uma linha, nao precisa de:
// {}
// nem return

console.log(multiplicacaoArrow(10, 10));

const msg = () => console.log('Testando');

msg();

// Pratica
// função que detecta o tipo do dado

function detectarTipo(valor) {
    if (typeof valor === 'string') {
        return 'String';
    } else if (typeof valor === 'number') {
        return 'Number';
    } else if (typeof valor === 'boolean') {
        return 'Boolean';
    } else {
        return 'Tipo desconhecido';
    }
}

console.log(detectarTipo('Teste'));
console.log(detectarTipo(5));
console.log(detectarTipo(false));


// Condicional ternária
// cond/expressão ? TRUE : FALSE

const idade = 18;

const ehMaiorDeIdade = idade >= 18 ? 'É maior' : 'Não é maior'

console.log(ehMaiorDeIdade);