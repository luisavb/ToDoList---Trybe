// criando uma função de adicão para evitar repetições
function addHTML(parent, child) {
  parent.appendChild(child);
}

// requisito 4: criando uma lista ordenada e adicionando a página HTML
const list = document.createElement('ol');
list.setAttribute('id', 'lista-tarefas');

const createTaskBoard = document.getElementById('acima');
addHTML(createTaskBoard, list);

// pegando o botões e o input 
const createTaskButton = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const deleteListButton = document.getElementById('apaga-tudo');
const removeTaskButton = document.getElementById('remover-finalizados');
const removeSelectedButton = document.getElementById('remover-selecionado');
const saveListButton = document.getElementById('salvar-tarefas');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');

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

// requisito 12: local storage

function save() {
  const sList = document.getElementsByTagName('ol')[0]; // analisando o console, deu pra notar que o primeiro item da array qu trará o conteúdo
  localStorage.setItem('saveList', sList.innerHTML); // como aprendi na mentoria que cria uma calculadora é com InnerHTML que se pega o conteúdo
}

saveListButton.addEventListener('click', save);
//
window.onload = () => { // para que aconteça depois que carregar né
  const listSaved = localStorage.getItem('saveList');
  const newList = document.getElementsByTagName('ol')[0];
  newList.innerHTML = listSaved;
  newList.addEventListener('click', bgColor);
  // newList.addEventListener('dblclick', line); // POR ENQUANTO A BONITA QUER CAUSAR TRETA já já resolvo.
};

// requisito 14
function removeSelect() {
  const select = document.querySelectorAll('.gray');
  for (let i = 0; i < select.length; i += 1) {
    select[i].remove();
  }
}
removeSelectedButton.addEventListener('click', removeSelect);

// requisito 13
