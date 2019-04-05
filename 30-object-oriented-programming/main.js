// // console.log('global suits:', SUITS)
// // console.log('Card.suits:', Card.suits())
// // console.log('Card.xx', Card.xx)

// console.log('Card.suits', Card.suits)
// console.log('Card.foo', Card.instanceProperty)

// let aceOfHearts = new Card('A', 'hearts')
// console.log('aceOfHearts.foo', aceOfHearts.foo)

let deck = new Deck()
console.log(deck)

function deal() {
  let hand = document.getElementById('hand')

  // clear the hand before adding more cards
  while (hand.firstChild) {
    hand.firstChild.remove()
  }

  let count = 0
  while (count < 5) {
    let randomCard = deck.draw()
    hand.appendChild(randomCard.render())
    count++
  }
}

deall.addEventListener('click', () => {
  deal()
  displayCardsLeft()
})

function displayCardsLeft() {
  let left = document.getElementById('cards-left')
  left.textContent = deck.cards.length
}