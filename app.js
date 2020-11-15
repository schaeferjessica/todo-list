// selectors
const todo = document.querySelector('.todo__input');
const todoBtn = document.querySelector('.todo__btn');
const todoList = document.querySelector('.todo__list');
const todoFilter = document.querySelector('.todo__filter');

// event listener
document.addEventListener('DOMContentLoaded', () => getLocalStorage());
todoBtn.addEventListener('click', event => {
  event.preventDefault();

  const todoValue = todo.value;
  if(todoValue !== "") {
    addTodo(todoValue);
    saveLocalStorage(todoValue);
  }
});

todoFilter.addEventListener('click', event => filterTodo(event));

// function 
const addTodo = todoValue => {
  const todoLi = `<li class="todo__item"><button class="todo__delete">-</button><button class="todo__check">✓</button><span>${todoValue}</span></li>`
  todoList.insertAdjacentHTML('beforeend', todoLi);
  todo.value = "";
  const todoItems = document.querySelectorAll('.todo__item');
  const lastItem = todoItems[todoItems.length - 1];
  const todoBtnCheck = lastItem.querySelector('.todo__check');
  const todoBtnDelete = lastItem.querySelector('.todo__delete');
  todoBtnCheck.addEventListener('click', () => checkItem(lastItem));
  todoBtnDelete.addEventListener('click', () => deleteItem(lastItem, todoValue));
}

const checkItem = lastItem => lastItem.classList.toggle("done");
const deleteItem = (lastItem, todoValue)=> {
  lastItem.remove()
  removeLocalStorage(todoValue)
};

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

const saveLocalStorage = inputValue => {
  let inputValues;
  if (localStorage.getItem("inputValues") === null) {
    inputValues = [];
  } else {
    inputValues = JSON.parse(localStorage.getItem("inputValues"));
  }

  inputValues.push(inputValue);
  localStorage.setItem("inputValues", JSON.stringify(inputValues));
}

const getLocalStorage = () => { 
  let inputValues;
  if (localStorage.getItem("inputValues") === null) {
    inputValues = [];
    return;
  } else {
    inputValues = JSON.parse(localStorage.getItem("inputValues"));
  }

  inputValues.forEach(inputValue => addTodo(inputValue));
}

const removeLocalStorage = inputValue => {
  let inputValues;
  if (localStorage.getItem("inputValues") === null) {
    inputValues = [];
    return;
  } else {
    inputValues = JSON.parse(localStorage.getItem("inputValues"));
  }
  inputValues.splice(inputValues.indexOf(inputValue), 1);
  localStorage.setItem("inputValues", JSON.stringify(inputValues));
}

//$('.klasse', body)
//const $ = (myEl, where) => where.querySelector(myEl);

// const value = 'jessi';
// addAgeByOne(value);

// const addAgeByOne = inputValue => {
//   console.log(inputValue);
// }
