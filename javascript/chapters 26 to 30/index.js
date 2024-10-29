/////// Maths Method ////////

// // Q no 1  (a)
// var num = +prompt("Enter any numbers?");
// var newNum = Number(num)
// console.log(newNum)

// //  (b)
// console.log(Math.round(num));

// //  (c)
// console.log(Math.floor(num));

// //  (d)
// console.log(Math.ceil(num));

// //  Q no 2
//  var userInput = prompt("Please enter a negative floating point number:");
//  var number = parseFloat(userInput);
//  if (number < 0) {
//    var roundOff = Math.round(number);
//      var floorValue = Math.floor(number);
//      var ceilValue = Math.ceil(number);
//   alert ("Your number is " +number + "\n The round off value of your number is "+roundOff  +"\n The floor value of your number is "+ floorValue +  "\n The round off value of your number is "+ceilValue )
//  } else {
//      alert("The number is not negative. Please refresh and try again.");
// }

// // Q no 3
// var number = +prompt("enter any number positive or negative");
// var absoluteValue = Math.abs(number);
// alert("The absolute value is: "+absoluteValue)   /// absolute means isko sign (+,-) sy koi farq nhi parhta bs number show krta hai yyeh

// // Q no 4
// var userNo = +prompt("guess the dice no!")
// var dice = Math.random()*6;
// var diceNo = Math.floor(dice)+1;
// if(userNo === diceNo){
// console.log("correct");
// }else{console.log("wrong");
// }

// //Q no 5
// var userInput = +prompt("Choice any one option \n head (1) \n tail(2)");
// var randomNo = Math.random()*2;
// var headOrTail = Math.floor(randomNo)+1;
// if(userInput === headOrTail){
//   alert("you win!");
// }else{
//   alert("you lost!")
// }

// // Q no 6
// var userInput = Math.random()*100
// var numbers = Math.floor(userInput)+1;
// alert(numbers)

// // Q no 7
// var weight = prompt("Enter your weight!");
// var userWeight =parseFloat(weight);
// alert("your weigth is: "+userWeight+" kilogram");

// // Q no 8
// var userInput = +prompt("Enter any number between 1 to 10 !");
// var random = Math.random()*10;
// var sceretNo = Math.floor(random)+1;
// if(userInput === sceretNo){
// alert("congratulations!!!")
// }else{
//   alert("try again!")
// }
//  ------- end -------