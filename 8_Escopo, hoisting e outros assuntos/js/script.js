// Escopo

// Escopo global
// { } => let e const

let nome = 'Endryus'; // var no escopo global

function exibirNome() {
    console.log(nome);
}

exibirNome();

console.log(`Nome: ${nome}`);

// Escopo local => { }
function exibirIdade() {
    const idade = 20;
    console.log(`Sua idade é: ${idade}`);
}

exibirIdade();

// console.log(idade) - Erro pois nao esta no escopo global

const idade = 30;

// Escopo de bloco
if (true) {
    const idade = 15;
    console.log(`Idade if: ${idade}`);
}

console.log(`Idade global: ${idade}`);

for(let i = 0; i < 5; i++) {
    const idade = 45;
    console.log(`Idade loop ${idade}`);
}


// Hoisting
x = 10;

console.log(x);

var x = 5;

console.log(x);

// let e const -> vao anular o hoisting de variaveis 
/*
y = 10;

let y;
*/

digaOi();

function digaOi() {
    console.log('Oi!');
}

// JS moderno, ele anula de certa forma o hoisting

//testando();

const testando = () => {
    console.log('Olá!');
}

