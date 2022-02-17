// criando uma função de adicão para evitar repetições
function addHTML(parent, child) {
  parent.appendChild(child);
}

// requisito 4: criando uma lista ordenada e adicionando a página HTML
const list = document.createElement('ol');
list.setAttribute('id', 'lista-tarefas');

const createTaskBoard = document.getElementById('acima');
addHTML(createTaskBoard, list);

// pegando o botões e o input // requisitos 3, 5, 10, 11 feitos no HTML
const createTaskButton = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const deleteListButton = document.getElementById('apaga-tudo');
const removeTaskButton = document.getElementById('remover-finalizados');

// alterando o value pre definido do input
input.addEventListener('click', () => {
  input.value = '';
});

// requisitos 7 e 8: refazendo requisitos pra deixar coerente agora que o eventListener acontece depois da tarefa

function bgColor(event) {
  const item = event.target;
  const grayItem = document.querySelector('.gray');
  if (grayItem !== null) { // demorou meio século pra entender esse negócio do null, pois estava sempre colocando
    grayItem.classList.remove('gray'); // ainda tenho que entender por que as vezes não funciona
  }
  item.classList.add('gray');
}

// requisito 9: doubleclick riscado

function line(event) {
  // const item = event.target;
  if (event.target.className === 'task completed gray') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

// event.target.classList.toggle('completed')

// requisito 5: criar itens da lista através do input
// --  agora que coloquei todos os chamados aqui tudo faz sentido, VALEU CAIQUE!!
function addTask() {
  const listItem = document.createElement('li');
  listItem.innerText = input.value;
  listItem.className = 'task';
  listItem.addEventListener('dblclick', line);
  listItem.addEventListener('click', bgColor);
  input.value = '';
  addHTML(list, listItem);
}
createTaskButton.addEventListener('click', addTask);

// requisito 10: criar um botão para apagar a lista toda
function deleteList() {
  const dlist = document.querySelector('ol');
  dlist.innerHTML = ' ';
}
deleteListButton.addEventListener('click', deleteList);

// requisito 11: criar um botão para apagar tasks completas
function removeTask() {
  const task = document.querySelectorAll('.completed');
  for (let i = 0; i < task.length; i += 1) {
    task[i].remove();
  }
}
removeTaskButton.addEventListener('click', removeTask);
