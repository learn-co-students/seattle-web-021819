function Die(n) {
  this.n = n
}

Die.prototype.roll = function() {
  return 1 + Math.floor(Math.random() * n)
}

let d6 = new Die(6)
let d20 = new Die(20)
let dCheat = new Die(20)
Die.prototype.roll = function() { return 20 }

let count = 0
while (count < 10) {
  console.log(' d6', d6.roll())
  console.log('d20', d20.roll())
  console.log('dCheat', dCheat.roll())
  count++
}