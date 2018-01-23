const assert = require('assert');
const Bank = require('../bank');
const Account = require('../account');

describe ('Bank', function() {

let bank;
let account1;
let account2;

  beforeEach(function() {
    bank = new Bank();
    account1 = new Account("Ziggy Stardust", 1000, "current");
    account2 = new Account("David Bowie", 1500, "business");
    account3 = new Account("The Thin White Duke", 2500, "current");
  })

  it('can add account', function() {
    bank.addAccount(account1);
    assert.strictEqual(bank.numAccounts(), 1);
  })

  it('can find account by owner', function () {
    bank.addAccount(account1);
    bank.addAccount(account2);
    assert.strictEqual(bank.findAccountByName('Ziggy Stardust'), account1);
  })

  it('cannot find account by owner', function () {
    bank.addAccount(account2);
    assert.strictEqual(bank.findAccountByName('Ziggy Stardust'), "Account not found");
  })

  it('can find account by high value', function() {
    bank.addAccount(account1);
    bank.addAccount(account2);
    assert.strictEqual(bank.findAccountByHighValue(), account2);
  })

  it ('can get the total account value', function () {
    bank.addAccount(account1);
    bank.addAccount(account2);
    assert.strictEqual(bank.getTotalValue(), 2500);
  })

  it ('can get average total account value', function (){
    bank.addAccount(account1);
    bank.addAccount(account2);
    assert.strictEqual(bank.getAverageBankFunds(), 1250);
  })

  it ('can get total value of account type', function () {
    bank.addAccount(account1);
    bank.addAccount(account2);
    bank.addAccount(account3);
    assert.strictEqual(bank.getTotalValueByAccountName("current"), 3500)
  })

})
