class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(data);
    }
}

class todoList extends List {
  // chamar o constructor da classe pai aqui utilizando o SUPER.
    constructor(){
       super();
// então posso criar outros métodos na classe filho.
       this.usuario = 'Afonso';
   }
   mostraUsuario() {
   console.log(this.usuario);
    }
}

var MinhaLista = new todoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();


// CONST 
//NÃO PODE TER SEU VALOR REATRIBUÍDO. É POSSÍVEL MUTAR UMA VARIÁVEL. MUTAR É TRABALHAR COM O MESMO TIPO MAS MUDANDO SEU VALOR.

// VARIAVEIS DE ESCOPO
// LET = ARMAZENA O ESCOPO DENTRO DE UMA FUNÇÃO

// Valores padrão

const soma = (a = 3,b = 6) => a + b; 
   
console.log(soma(1));
console.log(soma());