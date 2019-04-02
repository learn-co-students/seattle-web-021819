console.log('running')

const button = document.getElementById('clickme')
const span = document.getElementById('clicks')
button.addEventListener('click', () => {
  console.log('clicked')
  let clicks = span.textContent
  clicks = parseInt(clicks) + 1
  span.textContent = clicks
})

const form = document.getElementById('form')
form.addEventListener('submit', (ev) => {
  // stop the form from going to another page
  ev.preventDefault()

  let input = document.getElementById('input')
  let username = input.value;
  
  let usernameSpan = document.getElementById('username')
  usernameSpan.textContent = username
})

const todoForm = document.getElementById('todo-form')
const todoItem = document.getElementById('todo-item')
const todoItems = document.getElementById('todo-items')

todoForm.addEventListener('submit', (ev) => {
  ev.preventDefault()

  // innerHTML is evil! users can inject HTML/CSS/JS
  // innerHTML is left here in this code so you can expirement
  // try entering this into the input:
  // <img src="x" onerror="alert('evil')">
  //
  // best practice is to use something like textContent
  // li.textContent = todoItem.value
  const li = document.createElement('li')
  li.innerHTML = todoItem.value

  // open mystery: WHERE WAS priority ASSIGNED?!
  console.log('pri', priority.value);
  li.classList.add(priority.value)

  todoItems.appendChild(li)
})
