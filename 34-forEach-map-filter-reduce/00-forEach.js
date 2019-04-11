let aa = [1, 2, 3, 4, 5, 6]
// aa.forEach(() => {})
// for (let i = 0; i < aa.length; i++) {
//   console.log(aa[i])
// }

function forEach(aa, cb) {
  for (let i = 0; i < aa.length; i++) {
    cb(aa[i])
  }
}

forEach(aa, (item) => {
  console.log(item)
})

forEach(aa, console.log)