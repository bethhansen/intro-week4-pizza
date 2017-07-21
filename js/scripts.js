//business logic
function Pizza(topping, beverage) {
  // this.proportion = proportion;
  this.topping = topping;
  this.beverage = beverage;
}

Pizza.prototype.dinner = function() {
  return this.topping + this.beverage;
}


//user interface logic
$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();

    // var inputtedProportion = parseInt($("#proportion").val());
    var inputtedTopping = parseInt($("#topping").val());
    var inputtedBeverage = parseInt($("#beverage").val());
// console.log(inputtedBeverage);
    var newPizza = new Pizza (inputtedTopping, inputtedBeverage);

    $("#order").text(newPizza.dinner());
  });
});
