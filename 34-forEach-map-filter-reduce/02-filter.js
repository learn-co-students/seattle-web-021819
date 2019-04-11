let aa = [1, 2, 3, 4, 5, 6]

// accepts an array and a function
// appends items in the array to a
// new array if they match criteria
// defined by the callback function.
function filter(aa, cb) {
  let results = []
  for (let i = 0; i < aa.length; i++) {
    // short-circuit logic
    // it will stop as soon as 
    // one and has a false
    // or or a or has a true
    // a && b && c && d
    // a || b || c || d
    if (cb(aa[i])) {
      newLoggingFeature()
      results.push(aa[i])
    }
   }
  return results
}

function isEven(num) {
  return num % 2 === 0
}

console.log(filter(aa, isEven))

function defaultOr(n=888) {
  console.log(n)
  if (n === undefined) {
    n = 99
  }
  console.log(n)
}