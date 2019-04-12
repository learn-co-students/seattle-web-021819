function Die(n) {
  this.n = n
}

Die.prototype.roll = function() {
  return 1 + Math.floor(Math.random() * this.n)
}

function TalkyDie(n) {
  this.n = n
}

// class TalkyDie extends Die {}
TalkyDie.prototype = Die

let d6 = new Die(6)
let d20 = new Die(20)
let dTalky = new TalkyDie(20)

TalkyDie.prototype.roll = () => 'Talky'

let count = 0
while (count < 10) {
  console.log(' d6', d6.roll())
  console.log('d20', d20.roll())
  console.log('dTalky', dTalky.roll())
  count++
}