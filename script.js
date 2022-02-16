function addHTML(parent, child) {
  parent.appendChild(child);
}
const list = document.createElement('ol');
list.setAttribute('id', 'lista-tarefas');

const createTaskBoard = document.getElementById('cabecalho');
addHTML(createTaskBoard, list);

// Vai ser mais fácil criar o botão no HTML
// const addTaskButton = document.createElement('button');
// addTaskButton.setAttribute('id', 'criar-tarefa');
// addHTML(createTask, addTaskButton);

const createTaskButton = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');

input.addEventListener('click', () => {
  input.value = '';
});

function addTask() {
  const listItem = document.createElement('li');
  listItem.innerText = input.value;
  listItem.className = 'task';
  input.value = '';
  list.appendChild(listItem);
}

createTaskButton.addEventListener('click', addTask);

function addColorTaskItem() {
  list.addEventListener('click', (event) => {
    const tarefa = event.target;
    tarefa.className = 'gray';
  });
}

addColorTaskItem();

function removeColorTaskItem() {
  list.addEventListener('click', (event) => {
    const grayItem = document.querySelector('.gray');
    grayItem.classList.remove('gray');
    event.target.classList.add('gray');
  });
}

removeColorTaskItem();
