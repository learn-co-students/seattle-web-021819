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

  const li = document.createElement('li')
  li.innerText = todoItem.value

  // open mystery: WHERE WAS priority ASSIGNED?!
  console.log('pri', priority.value);
  li.classList.add(priority.value)

  todoItems.appendChild(li)
})
