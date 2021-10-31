const loginForm = document.querySelector("#loggin-form");
const loginInput = document.querySelector("#loggin-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const HIDDEN_KEY = "hidden";

function paintGreeting() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_KEY);
}

function handleLoginFormSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_KEY);
  const name = loginInput.value;
  localStorage.setItem(USERNAME_KEY, name);
  paintGreeting();
}

loginForm.addEventListener("submit", handleLoginFormSubmit);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_KEY);
  loginForm.addEventListener("submit", handleLoginFormSubmit);
} else {
  //show the greeting
  paintGreeting();
}
