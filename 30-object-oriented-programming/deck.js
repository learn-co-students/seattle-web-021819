class Deck {
  constructor() {
    this.cards = Deck.generateDeck()
  }

  draw() {
    let randomIndex = Math.floor(Math.random() * this.cards.length)
    let randomCard = this.cards[randomIndex]

    this.cards.splice(randomIndex, 1)

    return randomCard
  }

  static generateDeck() {
    let deck = []
    // iterate through all values
    for (let value of Card.values) {
      // iterate through all suits
      for(let suit of Card.suits) {
        deck.push(new Card(value, suit))
      }
    }
    return deck
  }
}