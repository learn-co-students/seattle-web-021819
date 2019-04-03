// var preserves scope
// around functions.
function count() {
  for (var i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log(i)
    }, i * 1000)
  }
}

count()
