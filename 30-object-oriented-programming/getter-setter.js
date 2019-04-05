class Bank {
  constructor() {
    this.actual_balance = 100
  }

  setBalance(newBalance) {
    if (newBalance > 0) {
      this.actual_balance = newBalance
    } else {
      // do nothing
    }
  }

  set balance(newBalance) {
    if (newBalance > 0) {
      this.actual_balance = newBalance
    } else {
      // do nothing
    }
  }
}