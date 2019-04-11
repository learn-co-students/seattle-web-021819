function forEach(aa, cb) {
  for (let i = 0; i < aa.length; i++) {
    cb(aa[i])
  }
}

function map(aa, cb) {
  let results = []
  for (let i = 0; i < aa.length; i++) {
    let result = cb(aa[i])
    results.push(result)
  }
  return results;
}

function filter(aa, cb) {
  let results = []
  for (let i = 0; i < aa.length; i++) {
    if (cb(aa[i])) {
      results.push(aa[i])
    }
  }
  return results;
}