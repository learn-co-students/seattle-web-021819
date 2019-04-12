function Die(n) {
  this.n = n
}

Die.prototype.roll = function() {
  return 1 + Math.floor(Math.random() * this.n)
}

let d6 = new Die(6)
let d20 = new Die(20)

String.prototype.times = (cb) => {
  let value = parseInt('times', this)
  console.log(this.valueOf())
  console.log({value})
  for (let i = 0; i < value; i++) {
    cb()
  }
}

console.log('hi')
'10'.times(() => {
  console.log(' d6', d6.roll())
  console.log('d20', d20.roll())
  console.log('dTalky', dTalky.roll())
})

// let count = 0
// while (count < 10) {
//   console.log(' d6', d6.roll())
//   console.log('d20', d20.roll())
//   console.log('dTalky', dTalky.roll())
//   count++
// }