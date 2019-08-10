// var addbtn = document.querySelector('.button');

// addbtn.onclick = function () {
//   var inputValue = document.querySelector('.input').value;
//   var list = document.getElementById('list');
//   var li = document.createElement('li');
//   var text = document.createTextNode(inputValue);
//   li.appendChild(text);
//   if (document.querySelector('.input').value == '') {
//     alert('добавьте задачу');
//   } else {
//     list.appendChild(li);
//   }

//   var readyList = document.getElementsByTagName('li');
//   for (var i = 0; i < readyList.length; i++) {
//     var span = document.createElement('span');
//     var x = document.createTextNode('\u00D7');
//     span.className = 'close';
//     span.appendChild(x);
//     readyList[i].appendChild(span);
//     readyList[i].onclick = function () {
//       this.classList.toggle('active');
//       if (this.classList.contains('active')) {

//       }
//     }
//   }

//   var close = document.querySelectorAll('.close');

//   for (var j = 0; j < close.length; j++) {
//     close[j].onclick = function () {

//       for (var i = 0; i < readyList.length; i++) {
//         if (readyList[i].classList.contains('active')) {
//           var parent = this.parentElement;
//           parent.style.display = 'none';
//         }
//       }

//     }
//   }



// }

let i = 1;

const form = document.querySelector('.todo-wrapper');
const taskList = document.querySelector('.tasks');
const taskCompleted = document.querySelector('.tasks-completed');

const completedTemplate = (taskName) => {
  const wrapper = document.createElement('div');
  const template = `
    <div class="completed-container">
        <input type="checkbox" class="task-complete" checked>
        <input type="text" class="todo-input task-name" disabled value=${taskName}>
        <button class="todo-btn task-edit">Edit</button>
    </div>
  `;
  wrapper.innerHTML = template;

  const checkbox = wrapper.querySelector('.task-complete');
  checkbox.addEventListener('click', function(e){
    const taskContainer = this.parentNode;
    const tasks = this.parentNode.parentNode;
    taskList.appendChild(taskTemplate(taskName))
    tasks.removeChild(taskContainer);
  })

  const editBtn = wrapper.querySelector('.task-edit');
  editBtn.addEventListener('click', editTask);

  return wrapper.firstElementChild;
}

const taskTemplate = (taskName) => {
  const wrapper = document.createElement('div');
  const template = `
  <div class="task-container">
    <input type="checkbox" class="task-complete">
    <input type="text" class="todo-input task-name" disabled value=${taskName}>
    <div class="task-buttons">
        <button class="todo-btn task-edit">Edit</button>
        <button class="todo-btn task-delete">Delete</button>
    </div>
  </div>
  `
  wrapper.innerHTML = template;

  const checkbox = wrapper.querySelector('.task-complete');
  checkbox.addEventListener('click', function(e){
    const taskContainer = this.parentNode;
    const tasks = this.parentNode.parentNode;
    // const taskCompleted = document.querySelector('.tasks-completed');
    taskCompleted.appendChild(completedTemplate(taskName))
    tasks.removeChild(taskContainer);
  })

  const deleteBtn = wrapper.querySelector('.task-delete');
  deleteBtn.addEventListener('click', deleteTask);

  const editBtn = wrapper.querySelector('.task-edit');
  editBtn.addEventListener('click', editTask);

  return wrapper.firstElementChild;
}

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const taskName = document.querySelector('.todo-input').value;
  taskList.appendChild(taskTemplate(taskName));
})

function deleteTask(){
  const taskContainer = this.parentNode.parentNode;
  const tasks = taskContainer.parentNode;
  tasks.removeChild(taskContainer);
}

function editTask(){
  const taskContainer = this.parentNode.parentNode;
  const input = taskContainer.querySelector('.task-name');
  if(i % 2 != 0) {
    this.innerText = 'Ok';
    input.disabled = !input.disabled;
  } else {
    this.innerText = 'Edit';
    input.disabled = !input.disabled;
  }
  i++;
}