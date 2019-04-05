class Cat {
  constructor(){
    this.kittens = ["Maru", "Grumpy", "Shadow"]
  }
 
  feedKitten(name){
    console.log(`Feeding ${name}`)
  }
 
  feedKittens(){
    let that = this
    this.kittens.forEach(function(kitten) {
      that.feedKitten(kitten)
      console.log('that:', that)
      console.log('this:', this)
    })
  }
}
let cat = new Cat()
cat.feedKittens()