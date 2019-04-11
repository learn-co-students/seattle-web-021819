let aa = [1, 2, 3, 4, 5, 6]

function reduce(aa, cb, initial) {
  let result = 0
  if (initial !== undefined) {
    result = initial
  }

  for (let i = 0; i < aa.length; i++) {
    let next = aa[i]
    result = cb(result, next)
  }
  return result;
}

let sum = reduce(aa, (accumulator, current) => {
  return accumulator + current
})
console.log(sum)

let votes = ["bush", "bush", "bush", "shrub", "hedge", "tree", "bush"]
let tally = reduce(votes, (soFar, next) => {
  if (soFar[next] === undefined) {
    soFar[next] = 0 
  }
  soFar[next]++
  return soFar
}, {})

console.log(tally)


let bb = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 8]
let unique = reduce(bb, (accum, current) => {
  if (!accum.includes(current)) {
    accum.push(current)
  }
  return accum 
}, [])
console.log(unique)