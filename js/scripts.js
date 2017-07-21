//business logic
function Pizza(proportion, topping, beverage) {
  this.proportion = proportion;
  this.topping = topping;
  this.beverage = beverage;
}
function Customer(person, phone) {
  this.person = person;
  this.phone = phone;
}
Pizza.prototype.dinner = function() {
  return this.proportion + this.topping + this.beverage;
}
Customer.prototype.client = function() {
  return "Thank you for your order " + this.person + "!";
  // return this.person + this.phone;
}

//user interface logic
$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();

    var inputtedProportion = parseInt($("#proportion").val());
    var inputtedTopping = parseInt($("#topping").val());
    var inputtedBeverage = parseInt($("#beverage").val());
    var inputtedPerson = $("#person").val();
    var inputtedPhone = $("#phone").val();

    var newPizza = new Pizza (inputtedProportion, inputtedTopping, inputtedBeverage);
    var newCustomer = new Customer(inputtedPerson, inputtedPhone);

    $("#order").text(newPizza.dinner());
    $("#thankYou").text(newCustomer.client());
    $(".orderTotal").show();
  });
});
