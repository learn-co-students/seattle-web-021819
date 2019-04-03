let URL = 'https://randomuser.me/api/?results=6'

function init() {
  initEventListeners()
  fetchPeople()
}

function initEventListeners() {
  refresh.addEventListener('click', () => {
    fetchPeople()
  })

  let form = document.getElementById('filter-form')
  form.addEventListener('submit', handleFilter)
}

const fetchPeople = () => {
  let loading = document.getElementById('loading')
  loading.classList.remove('hidden')
  clearPeople()

  fetch(URL)
  .then(response => {
    return response.json()
  })
  .then(data => {
    loading.classList.add('hidden')
    renderPeople(data.results)
  })
}

const clearPeople = () => {
  let ul = document.getElementById('peoples')
  while (ul.firstChild) {
    ul.firstChild.remove()
  }
}

const renderPeople = (people) => {
  let ul = document.getElementById('peoples')

  clearPeople()

  people.forEach(person => {
    let li = document.createElement('li')
    li.textContent = person.name.first + ' ' + person.name.last

    let img = document.createElement('img')
    img.src = person.picture.thumbnail

    li.appendChild(img)
    ul.appendChild(li)
  })
}

function handleFilter(ev) {
  ev.preventDefault()

  let filter = document.getElementById('filter')
  filter = filter.value
  filterPeople(filter)
}

function filterPeople(filter) {
  let ul = document.getElementById('peoples')
  let children = ul.children

  let length = children.length
  for (let i = length - 1; i >= 0; i--) {
    let child = children[i]
    if (child.textContent.includes(filter)) {
      console.log(children.length, 'kept', filter, child.textContent)
    } else {
      console.log(children.length, 'removed', filter, child.textContent)
      child.remove()
    }
  }
}

init()