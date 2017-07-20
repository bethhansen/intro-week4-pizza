//business logic

function Money(startBalance, deposit, withdraw) {
  this.startBalance = startBalance;
  this.deposit = deposit;
  this.withdraw = withdraw;
}

Money.prototype Balance = function() {
  return this.startBalance + this.deposit - this.withdraw;
}


//user interface logic
$(document).ready(function() {
  $("#balance").submit(function(event)) {
    event.preventDefault();

    var inputtedStartBalance =
  }
}
