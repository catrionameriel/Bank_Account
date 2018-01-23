const Bank = function() {
  this.accounts = [];
}

Bank.prototype.addAccount = function(account) {
  this.accounts.push(account);
}

Bank.prototype.numAccounts = function() {
  return this.accounts.length;
}

Bank.prototype.findAccountByName = function (name) {
  for (let account of this.accounts) {
    if (name === account.name) {
      return account;
    }
    return "Account not found"
  }
};

Bank.prototype.findAccountByHighValue = function () {
   Math.max.apply({}, this.accounts);
   return this.accounts[this.accounts.length - 1];
}

Bank.prototype.getTotalValue = function () {
  let total = 0;
  for (let account of this.accounts) {
    total += account.funds;
  }
  return total;
};

Bank.prototype.getAverageBankFunds = function() {
  let total = 0;
  for (let account of this.accounts) {
    total += account.funds;
  }
  return total / this.accounts.length;
}

Bank.prototype.getTotalValueByAccountName = function (type) {
  let total = 0;
  for (let account of this.accounts) {
    if (account.type === type) {
      total += account.funds;
    }
  }
    return total;
};

module.exports = Bank;
