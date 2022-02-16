function addHTML(parent, child) {
  parent.appendChild(child);
}
const list = document.createElement('ol');
list.setAttribute('id', 'lista-tarefas');

const createTask = document.getElementById('cria-tarefas');
addHTML(createTask, list);

const addTaskButton = document.createElement('button');
addTaskButton.setAttribute('id', 'criar-tarefa');
addHTML(createTask, addTaskButton);

// taskCreator.addEventListener('click',)
