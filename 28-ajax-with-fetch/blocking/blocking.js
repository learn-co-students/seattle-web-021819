function blockingDelay(cb, milliseconds) {
  let start = (new Date()).getTime()
  let duration = 0
  while (duration < milliseconds) {
    duration = (new Date()).getTime() - start
  }

  cb()
}

console.log('knock knock')
blockingDelay(function() {
  console.log('whos there?')
}, 5000)
console.log('synchronous blocking code')
console.log()


console.log('knock knock')
setTimeout(function() {
  console.log('whos there?')
}, 5000)
console.log('asynchronous non-blocking code')
