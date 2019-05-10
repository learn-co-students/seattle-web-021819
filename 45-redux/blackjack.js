const redux = require('redux')

const counter = (state=0, action) => {
	switch(action.type) {
		case 'INCREMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1
		default:
			return state

	}
}


function createDeck() {
	const suits = ['hearts', 'diamonds', 'clubs', 'spades']
	const faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

	// create deck
	const deck = [];
	for (suit of suits) {
		for (face of faces) {
			deck.push({face})
		}
	}
	return deck
}

function handValue(hand) {
	return hand.map(cardValue).reduce((a, b) => a + b, 0)
}

function cardValue(card) {
	// simplification: aces are only worth 11 (no 1 option)
	if (card.face === 'A') {
		return 11
	} else if ('JQK'.indexOf(card.face) >= 0) {
		return 10
	} else {
		return card.face
	}

}

const blackjack = (state, action) => {
	if (state === undefined) {
		return {
			deck: createDeck(),
			dealer: [],
			player: []
		}
	}
	switch(action.type) {
		case 'SHUFFLE': {
			const deckCopy = [...state.deck]
			for (let i in deckCopy) {
				let swapIndex = Math.floor(Math.random() * deckCopy.length)
				let temp = deckCopy[swapIndex]
				deckCopy[swapIndex] = deckCopy[i]
				deckCopy[i] = temp
			}
			return {...state, deck: deckCopy}
		} case 'DEAL': {
			const deckCopy = [...state.deck]
			return {
				deck: deckCopy,
				dealer: [deckCopy.pop(), deckCopy.pop()],
				player: [deckCopy.pop(), deckCopy.pop()],
			}
		} case 'DEALER_HIT': {
			const deckCopy = [...state.deck]
			return {
				deck: deckCopy,
				dealer: [...state.dealer, deckCopy.pop()],
				player: state.player,
			}
		} case 'HIT': {
			const deckCopy = [...state.deck]
			return {
				deck: deckCopy,
				dealer: state.dealer,
				player: [...state.player, deckCopy.pop()],
			}
		} case 'STAY': {
			return {...state, isPlayerStaying: true}
		} case 'FOLD': {
			const deckCopy = [...state.deck, ...state.dealer, ...state.player]
			return {
				deck: deckCopy,
				dealer: [],
				player: [],
			}
		} default: {
			return state
		}
	}

}

const reducer = redux.combineReducers({counter, blackjack})
const store = redux.createStore(reducer)
store.dispatch({type: 'SHUFFLE'})

const MENU = '(r) shuffle (d) deal (h) hit (s) stay (f) fold (x) quit'
store.subscribe(() => {
	const state = store.getState().blackjack
	const dealerScore = handValue(state.dealer)
	const playerScore = handValue(state.player)

	console.log('deck:', state.deck.length)
	console.log(dealerScore, 'dealer:', state.dealer)
	console.log(playerScore, 'player:', state.player)

	if (dealerScore > 21) {
		console.log('Dealer BUST!')
		store.dispatch({type: 'FOLD'})
	}
	if (playerScore > 21) {
		console.log('Player BUST!')
		store.dispatch({type: 'FOLD'})
	}

	if (state.isPlayerStaying) {
		if (dealerScore < playerScore && dealerScore < 21) {
			store.dispatch({type: 'DEALER_HIT'})
		} else if (playerScore > dealerScore) {
			console.log('Player WIN!')
			store.dispatch({type: 'FOLD'})
		} else {
			console.log('Player LOSE!')
			store.dispatch({type: 'FOLD'})
		}
	}

	console.log(MENU)
	console.log()
})


const keypress = require('keypress');
keypress(process.stdin);

process.stdin.on('keypress', (ch, key) => {
	if (key.name === 'r') {
		store.dispatch({type: 'SHUFFLE'})
	} else if (key.name === 'd') {
		store.dispatch({type: 'DEAL'})
	} else if (key.name === 'h') {
		store.dispatch({type: 'HIT'})
	} else if (key.name === 's') {
		store.dispatch({type: 'STAY'})
	} else if (key.name === 'f') {
		store.dispatch({type: 'FOLD'})
	} else if (key.name === 'x') {
		process.stdin.pause();
	}
});

console.log(MENU)
console.log()
 
process.stdin.setRawMode(true);
process.stdin.resume();

