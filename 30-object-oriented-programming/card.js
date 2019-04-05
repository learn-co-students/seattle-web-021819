const SUITS = ['hearts', 'diamonds', 'clubs', 'spades']
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

class Card {
  static values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
  static suits = ['hearts', 'diamonds', 'clubs', 'spades']
  static symbols = {
    spades: '♠',
    hearts: '♥',
    diamonds: '♦',
    clubs: '♣'
  }

  // value is 2-10, JQKA
  // suit is ['hearts', 'diamonds', 'clubs', 'spades']
  constructor(value, suit) {
    this.value = value
    this.suit = suit
  }

  suitSymbol() {
    // lookup the unicode symbol for this card instance's suit
    return Card.symbols[this.suit]
  }

  isRed() {
    // boolean zen
    // the boolean expression here is itself true or false
    // so we can actually just return it it it itself
    // return this.suit === 'hearts' || this.suit === 'diamonds'
    if (this.suit === 'hearts' || this.suit === 'diamonds') {
      return true
    }
    return false
  }

  render() {
    let card = document.createElement('div')
    let topLeft = document.createElement('div')
    let botRight = document.createElement('div')

    card.classList.add('card')
    if (this.isRed()) {
      card.classList.add('red')
    } else {
      card.classList.add('black')
    }

    topLeft.classList.add('top-left')
    botRight.classList.add('bot-right')

    topLeft.textContent = this.value + this.suitSymbol()
    botRight.textContent = this.suitSymbol() + this.value

    card.appendChild(topLeft)
    card.appendChild(botRight)
    return card
  }
}