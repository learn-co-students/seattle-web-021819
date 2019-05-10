const redux = require('redux')

const WITHDRAW = Symbol()
const DEPOSIT = Symbol()

// reducers always have two parameters
// state: the current state
// action: something that represents an action to do
//         {type: 'DO_THING', payload: {}}
// reducers always return a new state after the action
// has occured
const bankAccountReducer = (state, action) => {
  // initial state
  if (state === undefined) {
    state = {balance: 0}
  }

  // deposit
  switch(action.type) {
    case DEPOSIT: {
      let amount = action.payload.amount
      return {balance: state.balance + amount}
    }
    case WITHDRAW: {
      let amount = action.payload.amount
      return {balance: state.balance - amount}
    }
    default: {
      return state
    }
  }
}

let allStates = []

const store = redux.createStore(bankAccountReducer)
store.subscribe(() => {
  let state = store.getState()
  allStates.push(state)
  console.log('state:', state)
  console.log('allStates:', allStates)
  console.log()
})

function deposit(amount) {
  return {type: DEPOSIT, payload: {amount}}
}

function withdraw(amount) {
  return {type: WITHDRAW, payload: {amount}}
}

// replace these manually written objects with calls to functions
// that return the same object.
// store.dispatch({type: DEPOSIT, payload: {amount: 100}})
// store.dispatch({type: WITHDRAW,  payload: {amount: 23}})
// store.dispatch({type: WITHDRAW,  payload: {amount: 46}})
// store.dispatch({type: WITHDRAW,  payload: {amount: 17}})

store.dispatch(deposit(100))
store.dispatch(withdraw(23))
store.dispatch(withdraw(46))
store.dispatch(withdraw(17))
