let aa = [1, 2, 3, 4, 5, 6]

// returns a new copy of an array
// forEach element in an array
function map(aa, cb) {
  let results = []
  for (let i = 0; i < aa.length; i++) {
    let item = cb(aa[i])
    results.push(item)
  }
  return results
}

console.log(map(aa, num => num * num))
