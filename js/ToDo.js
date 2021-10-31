const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "ToDos";

let toDo = [];

function savedToDoList() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDo));
}

function deleteToDoList(event) {
  const li = event.target.parentElement;
  li.remove();
  toDo = toDo.filter((toDo) => toDo.id !== parseInt(li.id));
  savedToDoList();
}

function paintToDoList(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  button.addEventListener("click", deleteToDoList);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = { id: Date.now(), text: newToDo };
  paintToDoList(newToDoObj);
  toDo.push(newToDoObj);
  savedToDoList();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);
  toDo = parseToDos;
  parseToDos.forEach(paintToDoList);
}
