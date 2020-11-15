// selectors
const todo = document.querySelector('.todo__input');
const todoBtn = document.querySelector('.todo__btn');
const todoList = document.querySelector('.todo__list');


// event listener
todoBtn.addEventListener('click', event => {
  if(todo.value !== "") {
    addTodo(event);
  } else {
    event.preventDefault();
  }
});

// function 
const addTodo = event => {
  event.preventDefault();
  const todoLi = `<li class="todo__item"><button class="todo__delete">-</button><button class="todo__check">✓</button><span>${todo.value}</span></li>`
  todoList.insertAdjacentHTML('beforeend', todoLi);
  todo.value = "";
  const todoItems = document.querySelectorAll('.todo__item');
  const lastItem = todoItems[todoItems.length - 1];
  const todoBtnCheck = lastItem.querySelector('.todo__check');
  const todoBtnDelete = lastItem.querySelector('.todo__delete');
  todoBtnCheck.addEventListener('click', () => checkItem(lastItem));
  todoBtnDelete.addEventListener('click', () => deleteItem(lastItem));
}

const checkItem = lastItem => lastItem.classList.toggle("done");
const deleteItem = lastItem => lastItem.remove();


//$('.klasse', body)
//const $ = (myEl, where) => where.querySelector(myEl);