// let preserves scope
// around brackets
function count() {
  for (let i = 0; i < 10; i++) {
    console.log('setting timer i:', i)
    setTimeout(function() {
      console.log(i)
    }, i * 1000)
  }
}

count()
