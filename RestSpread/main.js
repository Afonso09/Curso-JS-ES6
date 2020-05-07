// REST
const usuario  = {
    nome: 'Afonso',
    idade: 28,
    empresa: 'Marmoraria São Bento',
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

// REST em Array

const arr = [1,2,3,4]
const [a,b,...c] = arr;

console.log(a);
console.log(b);
console.log(c);

//REST em parametrosde funções

function soma(a, b, ...params) {
    return params ;
}

console.log(soma(1, 3 , 4, 5, 6, 7));

// SPREAD - repassar as informações de um array para outra estruturad e dados.

// Array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2];

console.log(arr3);

// Alterando o nome do usuário
const usuario1 = {
    nome: 'Afonso',
    idade: 28,
    empresa: 'Marmoraria São Bento'
} 

const usuario2 = { ...usuario1, nome: 'Bento'};

console.log(usuario2);

// Template Literals

const nome = 'Afonso';
const idade = 28;

//console.log('Meu nome é' + nome + 'e tenho' + idade + 'anos.')
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

// Object short syntax(sintaxe curta de objeto) - não preciso indicar  igualdade entre variáveis ja declaradas

const nome = 'Afonso';
const idade = 28;

const usuario4 = {
    nome,
    idade,
    empresa: 'Marmoraria São Bento',
};

console.log(usuario4);

