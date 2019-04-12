function Die(n) {
  return {
    n: n,
    roll: function () {
      return 1 + Math.floor(Math.random() * n)
    }
  }
}

let d6 = Die(6)
let d20 = Die(20)
let dCheat = Die(20)
dCheat.roll = function() { return 20 }

let count = 0
while (count < 10) {
  console.log(' d6', d6.roll())
  console.log('d20', d20.roll())
  console.log('dCheat', dCheat.roll())
  count++
}