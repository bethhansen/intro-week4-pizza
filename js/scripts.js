//business logic
// function Pizza(proportion, topping, beverage) {
//   this.proportion = proportion;
//   this.topping = topping;
//   this.beverage = beverage;
// }
function Customer(person, phone) {
  this.person = person;
  this.phone = phone;
}
// Pizza.prototype.dinner = function() {
//   return this.proportion + this.topping + this.beverage;
// }
Customer.prototype.client = function() {
  // return "Thank you for your order" + this.name + "! We will have your" + this.proportion + "with" + this.topping + "and" + this.beverage + ". Your final order price is:" + "#order";
  return this.person + this.phone;
}

//user interface logic
$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();

    // var inputtedProportion = parseInt($("#proportion").val());
    // var inputtedTopping = parseInt($("#topping").val());
    // var inputtedBeverage = parseInt($("#beverage").val());
    var inputtedPerson = $("#person").val();
    var inputtedPhone = $("#phone").val();

    // var newPizza = new Pizza (inputtedProportion, inputtedTopping, inputtedBeverage);
    var newCustomer = new Customer(inputtedPerson, inputtedPhone);

    // $("#order").text(newPizza.dinner());
    $("#order").text(newCustomer.client());
  });
});
