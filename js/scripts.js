//business logic
function Pizza(proportion, topping, beverage) {
  this.proportion = proportion;
  this.topping = topping;
  this.beverage = beverage;
}

pizza.prototype.dinner = function() {
  return this.proportion + this.topping + this.beverage;
}
alert("hi");


//user interface logic
$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();

    var inputtedProportion = parseInt($("#proportion").val());
    var inputtedTopping = parseInt($("#topping").val());
    var inputtedBeverage = parseInt($("#beverage").val());
    var newPizza = new Pizza (inputtedproportion, inputtedTopping, inputtedBeverage);
console.log(inputtedProportion);

    $("#order").text(newPizza.dinner);
  });
});
