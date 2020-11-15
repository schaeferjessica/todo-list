// selectors
const todo = document.querySelector('.todo__input');
const todoBtn = document.querySelector('.todo__btn');
const todoList = document.querySelector('.todo__list');
const todoFilter = document.querySelector('.todo__filter');

// event listener
todoBtn.addEventListener('click', event => {
  if(todo.value !== "") {
    addTodo(event);
  } else {
    event.preventDefault();
  }
});

todoFilter.addEventListener('click', event => filterTodo(event));

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

const filterTodo = event => {
  const todos = todoList.childNodes;
  todos.forEach(todo => {
    switch (event.target.value) {
      case "all":
      todo.removeAttribute('hidden');
      break;
      case "open":
        if (!todo.classList.contains("done")) {
          todo.removeAttribute('hidden');
        } else {
          todo.setAttribute('hidden', true);
        }
      break;
      case "done":
        if (todo.classList.contains("done")) {
          todo.removeAttribute('hidden');
        } else {
          todo.setAttribute('hidden', true);
        }
      break;
    }
  });
}


//$('.klasse', body)
//const $ = (myEl, where) => where.querySelector(myEl);