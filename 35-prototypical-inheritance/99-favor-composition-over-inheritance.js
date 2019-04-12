class Stuff {
  doStuff() {
    console.log('stuff')
  }
}

// why do we even need inheritance?
// class OtherStuff extends Stuff {}

class OtherStuff {
  constructor() {
    this.stuff = new Stuff()    
  }

  doStuff() {
    return this.stuff.doStuff()
  }
}