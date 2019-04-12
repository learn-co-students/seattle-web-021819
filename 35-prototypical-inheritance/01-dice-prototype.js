function Die(n) {
  this.n = n
}

Die.prototype.roll = function() {
  return 1 + Math.floor(Math.random() * this.n)
}

let dd = new Die(6)
let d20 = new Die(20)

let count = 0
while (count < 10) {
  console.log('d6', dd.roll())
  count++
}

count = 0
while (count < 10) {
  console.log('d20', d20.roll())
  count++
}