// Operadores e comparações

// +, -, /, *

console.log(12 / 2);

console.log('12' + 2);

console.log('12' / 2);

// modulo - % -> resto da divisao

console.log(12 % 2);
console.log(13 % 2);

// exponenciação - **

console.log(2 ** 3); // 2 x 2 = 4 x 2

// ordem matematica
const operacao = (12 + 5) * 2 + 4;

console.log(operacao)

// Operadores 
// >, <, >=, <=

console.log(12 > 12);

console.log(12 >= 12);
console.log(12 <= 12);

// ==, ===, !=, !==

// = a mais > há a avaliação do tipo

console.log(12 == '12');
console.log(12 === '12');

// verificando se um valor é diferente do outro
console.log(1 != 2); //
console.log(1 !== 2); // se o valor e o tipo é diferente
console.log(1 !== '1');
console.log(1 !== 1);

// a compração de strings é por == ou ===
console.log('teste' == 'teste');
console.log('teste' === 'teste');

// toda comparação gera um resultado boolean

// operador de pos incremento e pre incremento

let num = 1;

// muito utilizado em loops (for, while)
console.log(num++)
console.log(num);

console.log(++num);
console.log(--num);

num = num + 5;

console.log(num);

num += 5;

console.log(num);

num -= 2;

console.log(num);

// variavel operação atribuição valor

console.log((num *= 2));


// pratica

const idade = 19;

const podeDirigir = idade >= 18;

console.log(podeDirigir);

// condicionais (if)
if(idade >= 18) {
    console.log('Esta pessoa pode dirigir');
}