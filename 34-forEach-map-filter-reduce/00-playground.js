function foo() {
  let x = 99;
  let y = x * 3;
  return y;
}

let bar = foo;
let baz = foo();
console.log(bar)
console.log(baz)

function isEven(num) {
  return num % 2 === 0
}

function isOdd(num) {
  return num % 2 === 1
}

function isMultipleOf5(num) {
  return num % 5 === 0
}

function doesNumberSatisfyCb(num, cb) {
  return cb(num)
}

doesNumberSatisfyCb(99, isEven)