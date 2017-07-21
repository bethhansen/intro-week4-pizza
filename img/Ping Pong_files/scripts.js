//---business logic------------
  var pingPong = function(number) {  //  make a variable out of the function number
  var result = [];  //  make a variable that will output an array
    for (i = 1; i<= number; i ++) {  //  for loop of var index that begins at 1
    if (i % 15 === 0) {  //  if index can be divided by 15 it will equal to false (which is less than 1)
        result.push("Ping-Pong"); //  if a number divisable by 15 if false return Ping-Pong
      } else if (i % 5 === 0) {  //  if index can be divided by 5 it will equal to false (which is less than 1)
        result.push("Pong");  //  if a number divisable by 5 if false return Ping-Pong
      } else if (i % 3 === 0) {  //  if index can be divided by 3 it will equal to false (which is less than 1)
        result.push("Ping");  //  if a number divisable by 3 if false return Ping-Pong
      } else {  //  all other numbers that dont match the following criteria
        result.push(i);  //  return the number that was entered
      }
    };
    return result;  //display the result
  };
  //---user interface logic------------
$(document).ready(function() {  //  calls the document to be ready to do some jquery functions
  $("form#pingPong").submit(function(event) {  //  find the form pingPong and when submit is pushed do this event
    event.preventDefault();  //  stops the appliction from automatically resubmitting
      var number = parseInt($("input#number").val());  //  the variable number will take the numaric value of the input
      if (isNaN(number)) {  //  if a number is not entered into our number function
      alert("Please enter a number!");  //  alert the user to enter a number
      } else {  //  if a number is entered
      var result = pingPong(number);  // a new variable will be created with the variable pingPong
      result.forEach(function(entry){  // the results will be added to the new function entry
      $("#display").text(result);  //  dislplay will create a list
      $("#pingPong").trigger('reset');  //  resets the form back to empty
      $(".returnNumber").show(result);
    });
    }
  });
});
