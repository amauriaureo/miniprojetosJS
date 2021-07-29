'use-strict';

let banco = [
    {'tarefa': 'Estudar JS', 'status': ''},
    {'tarefa': 'Estudar css', 'status': 'checked'},
    {'tarefa': 'Estudar HTML', 'status': 'checked'}
];

const criarItem = (tarefa, status='', indice) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice=${indice}>
    `
    document.getElementById('todoList').appendChild(item);
}

const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while(todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}
//chama
const atualizarTela = () => {
    limparTarefas();
    banco.forEach( (item, indice) => criarItem (item.tarefa, item.status, indice));
}

const inserirItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    if (tecla === 'Enter'){
        banco.push ({'tarefa': texto, 'status': ''});
        atualizarTela();
        evento.target.value = '';
    }
}

const clickItem = (evento) => {
    const elemento = evento.target;
    console.log(elemento);
}

document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('todoList').addEventListener('click', clickItem);

atualizarTela();