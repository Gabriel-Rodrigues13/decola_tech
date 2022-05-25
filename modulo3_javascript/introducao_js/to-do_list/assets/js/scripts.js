const formulario = document.getElementById("formulario");
const listaTarefa = document.getElementById("tarefas");

formulario.onsubmit = function (e) {
    e.preventDefault();
    const input = document.getElementById("input_tarefa");
    criarTarefa(input.value);
    formulario.reset();
}


function criarTarefa(descricao) {
    const container = document.createElement('div');
    const novaTarefa = document.createElement('input');
    const labelTarefa = document.createElement('label');
    const descricaoTarefa = document.createTextNode(descricao)

    novaTarefa.setAttribute('type', 'checkbox');
    novaTarefa.setAttribute('name', descricao);
    novaTarefa.setAttribute('id', descricao);

    labelTarefa.setAttribute('for', descricao);
    labelTarefa.appendChild(descricaoTarefa);

    container.classList.add('item-tarefa');
    container.appendChild(novaTarefa);
    container.appendChild(labelTarefa);

    listaTarefa.appendChild(container)
}