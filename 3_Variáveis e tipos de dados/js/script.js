// Variáveis

// 3 formas de criar variável
// var, let e const -> usar let e const


var nome = 'Endryus';

console.log(nome);
console.log('Endryus');

// let -> substituir o var
// A diferença é o escopo, { }, let respeita o escopo

let idade = 24;

// Tanto o var como let, mudam os valores
nome = 'Pedro';
idade = 30;
console.log(nome, idade);

const pi = 3.14;
console.log(pi);

// Tipos de dados

let numero = 41;
let numero2 = 41.5;

console.log(numero, numero2);


let umTexto = 'Meu número é 12 @#!';
console.log(umTexto);

// Avaliar o tipo
// typeof - operador de avaliação de tipo
console.log(typeof numero);
console.log(typeof numero2);
console.log(typeof umTexto);

// boolean = true, false
let estaChovendo = false;
console.log(estaChovendo);
console.log(typeof estaChovendo);

console.log(10 > 5);

let semValor = null;
console.log(semValor);

// Tudo é objeto no JS
// Vários tipos de dados são originados com objetos

console.log(typeof semValor);


let indefinido;

console.log(indefinido);
console.log(typeof indefinido);

// Null = eu inicio algo nulo
// Undefined = eu esqueço de colocar o valor

// Arrays e objetos

// tipagem dinamica
let variavel = 100;
console.log(typeof variavel);

variavel = 'texto';
console.log(typeof variavel);

// Operações básicas 

// Concatenar textos = unir

let primeiroNome = 'endryus';
let sobreNome = 'Montezano';

// Nome + Sobrenome
let nomeCompleto = primeiroNome + ' ' + sobreNome;
console.log(nomeCompleto);

console.log('Olá ' + nomeCompleto + ', tudo bem ?');

// Operações aritméticas
console.log(10 + 5);
console.log(10 - 5);
console.log(10 / 5);
console.log(10 * 5);

// Comparações
console.log(10 > 5);
console.log(10 < 5);
// Toda comparação retorna um booleano

// >=, <=
// ==, === (identico) (prefefir '===')

console.log(10 > 10);
console.log(10 >= 10);
console.log(10 == 10);
console.log(10 === 10);

// Pode acarretar em erros
console.log('10' + 1);

// Valor e tipo são iguais
console.log(10 === '10');


// '=' Nao é ==

// = > atribuição
// ==, === > comparação

let a = 10;
let b = 20;

//console.log((a = b));

console.log(a);

console.log(a === b);