// Q no 1
// var usercity = prompt("write your city name?").toLowerCase();
// if (usercity ==="karachi") {
//     alert("welcome to the CITY OF LIGHTS" )
// } else {
//     alert("welcome to the "+ usercity )
// }

//Q no 2
// var messages = prompt("write your gender here!").toLowerCases;
// if (messages === "male") {
//     alert("Good morning sir!" );
// } else if(messages === "'female") {
//     alert("Good morning maam!");
// }else{
//     alert("Good morning!")
// }

//Q no 3
// var drivers = prompt("which signal light is indicating?");
// if(drivers ==="red"){
// alert("MUST STOP")
// }
// else if(drivers ==="yellow"){
//     alert("READY TO MOVE")}
// else{
//      alert("MOVE ON")
// }

// Qqq no  4
// var drivers = +prompt("how much fuel left in your vechicle?");
// if(drivers === 0.25){
//     alert("PLEASE REFILL FUEL IN YOUR VEHICLE!")
// }else{
//     alert("ALERT! YOUR FUEL NEAR TO BE FINISH LINE")
// }

//Q no 5
//////// a)
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

/////// b)
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

//////// c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

/////// d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

//////// e)
// if (true) {
//     alert("True");
// }  // this wil show alert
// if (false) {
//     alert("False");
// }

//////// f)
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }


// Q no 7
// var num=3;
// userNum= +prompt("enter any number");
// if(num===userNum){
//     document.write("<h1>Bingo! Correct answer</h1>");
// }else if (num-1 === userNum || num+1 === userNum){
//     document.write("<h1>Close enough to the correct answer</h1>")
// }else{
//     document.write("<h1>wrong answer</h1>");
// }

// Q no 8
// var num= +prompt("enter any number");
// if(num % 3 === 0) {
//     document.write("divisible of 3");
// }else{
//     document.write("not divisible by 3 ");
// }

// Q no 9
// var num = +prompt("Write any number!");
// if(num%2 === 0){
//     document.write("Even")}
//     else{
//     document.write("odd")
//  }

// Q no 10
// var userTemp =prompt("what's the current temperature ?");
// if(userTemp=40){
// alert("It's too not hot outside.")
// }else if(userTemp===30){
// alert("The weather today is noraml")
// }else if(userTemp===20){
// alert("today weather is cold")
// }else if(userTemp === 10){
// alert("OMG! today weather is soo cool")
// }

// Q no 11
// var firstNumber = +prompt("Enter the first number:");
// var secondNumber = +prompt("Enter the second number:");
// var operation = prompt("Enter the operation (+, -, *, /, %):");
// if (operation === "+") {
//     result = firstNumber + secondNumber;
//     alert("Result: " + result);
// } else if (operation === "-") {
//     result = firstNumber - secondNumber;
//     alert("Result: " + result);
// } else if (operation === "*") {
//     result = firstNumber * secondNumber;
//     alert("Result: " + result);
// } else if (operation === "/") {
//     if (secondNumber !== 0) {
//         result = firstNumber / secondNumber;
//         alert("Result: " + result);
//     } else {
//         alert("Error: Division by zero is not allowed.");
//     }
// } else if (operation === "%") {
//     if (secondNumber !== 0) {
//         result = firstNumber % secondNumber;
//         alert("Result: " + result);
//     } else {
//         alert("Error: Division by zero is not allowed.");
//     }
// } else {
//     alert("Invalid operation. Please enter one of +, -, *, /, %.");
// }