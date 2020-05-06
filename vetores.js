const arr = [1, 3, 4, 5, 8, 9];

// MAP percorre todo o vetoor e retorna a ação que precisa ser executada. 
const newArr = arr.map(function(item) {
    return item * 2;
});

console.log(newArr);

// REDUCE - uma forma de consumir todo o vetor e transoformar numa variável, geralmente um número.

const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

// FILTER - retorna true ou false.

const fiter = arr.filter(function(item){
    return item % 2 ===0;
});

console.log(filter);

// FIND - procura informações dentro do array.

const find = arr.find(function(item){
    return item === 4;
});

console.log(find);