let list = document.querySelector('#list');
let list2 = document.querySelector('#list2');
let list3 = document.querySelector('#list3');
let btnAdd = document.querySelector('.btn-add');
let containerWindowDeleteTask = document.querySelector('#container-window-delete');
let windowQuantity = document.querySelector('.container-window-quantity');
let containerContent = document.querySelector('.container');
let containerModalClear = document.querySelector('.container-window-clearAll');
let btnWidowDelete = document.querySelector('#btn-window-delete');

//  удаление дела по нажатию на крестик
list.addEventListener('click', function(event) {
  if(event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }else if(event.target.className === "closeBtn") {
    let div = event.target.parentNode;
    div.remove();
    countingToDo();
  }
});

list2.onclick = function(event) { 
  if(event.target.tagName ==="LI") {
    event.target.classList.toggle('checked');
  }else if (event.target.className == 'closeBtn'){
    windowDeleteTask();
    let task = event.target.parentNode;
       btnWidowDelete.onclick = function() {
        containerWindowDeleteTask.style.display = 'none';
        containerContent.style.display = 'block';
        task.remove();
        countingProgress();

    }
  }
}

list3.addEventListener('click', function(event) {
  if(event.target.tagName ==="LI") {
    event.target.classList.toggle('checked');
  }else if(event.target.className === "closeBtn"){
    let el = event.target.parentNode;
    el.remove();
    countingDone();
  }
});

// изменение статуса дела, перенос
list.addEventListener('click', function(event) {
  let quantity = document.querySelectorAll('#list2 > li').length;
if(quantity < 5) {
  if(event.target.className === "btn-transever") {
    list2.appendChild(event.target.parentNode);
    countingToDo();
    countingProgress();
}
}else{
      windowQuantity.style.display = 'flex';
      containerContent.style.display = 'none';

    }
});

list2.addEventListener('click', function(event) {
  if(event.target.className === 'btn-transever') {
    list3.appendChild(event.target.parentNode);
    countingProgress();
    countingDone();
}
});

list3.addEventListener('click', function(event) {
  if(event.target.className === 'btn-transever'){
    list.appendChild(event.target.parentNode);
    countingToDo();
    countingDone();
  }
});

// добавление элементов в список
btnAdd.onclick = newElement;

function newElement() {
  let li = document.createElement('li');
  li.className = 'list-data';
  let dataInput = document.querySelector('#data-input').value;
  let dateInput = document.querySelector('#date-input').value;
  li.innerHTML = `${dataInput} ${dateInput} <button class="btn-transever"></button><button class="closeBtn"></button>`;
  if(dataInput==='') {
    return;
    }else{
    document.getElementById('list').appendChild(li);
  }
 document.getElementById('data-input').value = '';
 document.getElementById('date-input').value = '';
 countingToDo();
}

// очистка списков дел 
function clearList(value) {
  value.innerHTML = " ";
  countingToDo ();
  countingProgress();
  countingDone();
  containerContent.style.display = 'block';
  containerModalClear.style.display = 'none';
  
}

// подсчет количества дел в cписках
function countingToDo() {
  let counter = document.getElementById('counter');
  let toDoLenght = document.querySelectorAll('#list > li').length;
  counter.innerText = toDoLenght;
}

function countingProgress() {
  let counterProgress = document.getElementById('counter-progress');
  let progressLenght = document.querySelectorAll('#list2 > li').length;
  counterProgress.innerText = progressLenght;
}

function countingDone() {
  let counterDone = document.getElementById('counter-done');
  let doneLenght = document.querySelectorAll('#list3 > li').length;
  counterDone.innerText = doneLenght;
}

// Модальные окна

function clousedWindowEmersion() {
  let windowQuantity = document.querySelector('.container-window-quantity');
  windowQuantity.style.display = 'none';
}

function windowDeleteTask() {
  containerWindowDeleteTask.style.display = 'flex';
  containerContent.style.display = 'none';
  if(event.target.onclick === "btn-window-delete"){
  }
}

function openWindowProgressClear() {
  containerModalClear.style.display = 'flex';
  containerContent.style.display = 'none';
}

function clousedModalWindow() {
  containerWindowDeleteTask.style.display = "none";
  windowQuantity.style.display = 'none';
  containerModalClear.style.display = 'none';
  containerContent.style.display = 'block';
}
