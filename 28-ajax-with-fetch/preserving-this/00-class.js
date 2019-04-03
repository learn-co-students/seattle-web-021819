class Thing {
  constructor() {
    this.data = [1, 2, 3, 4, 5]
  }

  printThatDataWithArrow() {
    let index = 0
    this.data.forEach(() => {
      console.log(this.data[index])
      index++
    })
  }

  printThatData() {
    let index = 0
    let that = this
    this.data.forEach(function() {
      console.log(that.data[index])
      index++
    })
  }
}

let tt = new Thing()
tt.printThatDataWithArrow()
tt.printThatData()