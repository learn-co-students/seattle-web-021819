console.log(PARKS)

// 1. create DOM elements of the parks on the page
let list = document.getElementById('parks')
PARKS.forEach(park => {
  let li = document.createElement('li')
  li.innerText = park.name

  // generally frowned up to attach data to DOM
  // keep data in JavaScript, keep HTML in HTML
  // li.setAttribute('data-park-name', park.name)

  // 2. attach click handlers to each park list item
  // we want to pass park as a parameter to renderParkDetails
  // but we can't invoke it immediately, we want to invoke it
  // with the park parameter at a later time
  // The "99" here represents a value being returned from the
  // renderParkDetails function and being passed as a "function"
  // to addEventListener, which doesn't work.
  // li.addEventListener('click', renderParkDetails(park))
  // li.addEventListener('click', 99)

  // instead of just passing "renderParkDetails(park)" which invoked immediately
  // we wrap that with an arrow function as "() => renderParkDetails(park)"
  // and the resulting arrow function represents a block of code to run later.
  li.addEventListener('click', incrementClicks)
  li.addEventListener('click', () => renderParkDetails(park))

  // identical as the single-line version above.
  // perhaps this one would be better if we expected to place debug statements
  // or console logs or more code in the future.
  // li.addEventListener('click', () => {
  //   renderParkDetails(park)
  // })

  list.appendChild(li)
})

function renderDetailsInnerHTML(park) {
  let {name, img, description} = park
  let details = document.getElementById('details')
  // old school mega-string concatenation which is annoying to type
  // details.innerHTML = "<h2>" + name + "</h2>"
  // details.innerHTML += "<img src='" + "imgs/" + img + "' />"
  // details.innerHTML += "<p>" + description + "</p>"

  // new school string interpolation which is kind of dope
  details.innerHTML = `
    <h1>${name}</h1>
    <img src="imgs/${img}" />
    <p>${description}</p>
  `
}

// 3. shows park details when a park list item is clicked
function renderParkDetails(park) {
  // we can pick off each property and create a variable manually
  // let name = park.name
  // let img = park.img
  // let description = park.description
  // or we can use new ES6 "object destructuring"
  let {name, img, description} = park
  let h2 = document.createElement('h2')
  let imgEl = document.createElement('img')
  let p = document.createElement('p')

  h2.textContent = name
  imgEl.src = 'imgs/' + img
  p.textContent = description

  let details = document.getElementById('details')
  // avoid using innerHTML. it has potential security holes
  // and there's just always other ways to do things.
  // other reasons: efficiency
  // details.innerHTML = ''

  // this is a more preformant way to clear out all elements from a parent
  while (details.firstChild) {
    details.firstChild.remove()
  }

  details.appendChild(h2)
  details.appendChild(imgEl)
  details.appendChild(p)
}

function incrementClicks() {
  let clicks = document.getElementById('clicks')
  clicks.textContent++
}

// ultimate goal: see how to replace content on the page
// innerHTML = '' vs while(target.fristChild) { target.firstChild.remove() }

// perform a HTTP POST request to create a new theme park
fetch("http://localhost:3000/parks", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: 'Silverwood',
    description: "Some park in Idaho."
  })
})
.then(res => res.json())
.then(json => {
  console.log({json})

  let ul = document.getElementById('parks')
  let li = document.createElement('li')
  li.textContent = json.name
  ul.appendChild(li)

  li.addEventListener('click', () => renderParkDetails(json))
})