/*
 * This problem is based on some code we wrote for the part of our
 * application that simulates a user's retirement based on a number
 * of variables and assumptions.
 *
 * In the ProrataSimulator class below, implement a solution to simulate
 * the withdrawals from a customer's accounts using a pro rata withdrawal
 * strategy. Pro rata means "proportional ratio" - in other words, you
 * will need to ensure that the withdrawal keeps the proportions of the
 * portfolio held in each account consistent. Here is an example:
 *
 * Holdings:
 *  $1M => (500K taxable acct, 300K IRA, 200K Roth IRA)
 * Withdrawal:
 *  $10K => 5K taxable, 3K IRA, 2K Roth IRA
 *
 * Your solution should print the amount withdrawn from each account and
 * the remaining balance each year.
 * At the end of the simulation, print out the number of years that the
 * retirement lasted.
 *
 * You can look up any syntax questions you have if necessary.
 */

function runSolution() {
  var accounts = []
  accounts.push(new Account('1234', 'INDIVIDUAL', 645000))
  accounts.push(new Account('5678', 'IRA', 367000))
  accounts.push(new Account('9012', 'ROTH', 230000))
  let annualWithdrawal = 60000

  console.log("STARTING BALANCES:")
  accounts.forEach((acct) => {
    console.log(acct.toString())
  })
  console.log("ANNUAL WITHDRAWAL: ", annualWithdrawal)

  simulateRetirement(accounts, annualWithdrawal)
}

function simulateRetirement(accounts, annualWithdrawal) {
  // IMPLEMENT THIS
}

class Account {
  constructor(number, type, balance) {
    this.number = number
    this.type = type
    this.balance = balance
  }

  withdraw(amount) {
    this.balance -= amount
    return this.balance
  }

  toString() {
    return `[${this.number}] type: ${this.type}, balance: $${this.balance}`
  }
}

runSolution()
