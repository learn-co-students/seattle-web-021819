fetch("http://my-app.herokuapp.com/api/v1/notes")
.then(res=>res.json())
.then(data=>target.textContent=data)