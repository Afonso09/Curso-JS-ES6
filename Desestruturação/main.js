const usuario = {
    nome: 'Afonso',
    idade: 28,
    endereco: {
        cidade: 'Cubatão',
        estado: 'São Paulo',
    },
};

// Em variáveis comuns
//const { nome, idade, endereco: {cidade} } = usuario;

//console.log(nome);
//console.log(idade);
//console.log(cidade);

// Em parâmetros de funções

function mostraNome({ nome, idade }) {
    console.log(nome, idade);
}

mostraNome(usuario);