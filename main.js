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