/////// Function ///////

// // Q no 1
// function current(){
//     var currentDate= new Date();
// document.write(currentDate );
// }
// current()


// // Q no 2
// function name (){
//     var firstName = prompt("enter your first name!");
//     var lastName = prompt("enter your last name!");
//     alert("HELLO "+firstName+" "+lastName+" !" )
// }
// name()


// // Q no 3
//  function numbers(){
//     var firstNum = +prompt ("enter a number!");
//     var secondNum = +prompt ("please enter a second number to preform addition function!");
//     var sum = firstNum + secondNum
//     alert("The answer is : "+sum)
//  }
//  numbers()


// // Q no 4
// function numbers(num1, num2, operator) {
//     var first = +prompt("enter any number!");
//     var second = +prompt("enter second number!");
//     var operation = prompt("which operation do you want to apply between these numbers?");
//     switch (operation) {
//         case '+':
//             solve = first + second;
//             break;
//         case '-':
//             solve = first - second;
//             break;
//         case '*':
//             solve = first * second;
//             break;
//         case '/':

//             if (second !== 0) {
//                 solve = first / second;
//             } else {
//                 solve = 'Error: Division by zero';
//             }
//             break;
//         default:
//             solve = 'Error: Invalid operator';
//     }

//     alert("Result: " + solve);
// }

// numbers();


// // Q no 5
// function square (){
//     var num = +prompt("enter any number! we show you their sqaure");
//     var numSquare = num * num;
// alert("The square of "+ num +" is: "+numSquare)
// }
// square()


// // Q no 6
// function factorial(num) {

//     if (num < 0) {
//         return "Error: Factorial is not defined for negative numbers.";
//     } else if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         var result = 1;
//         for (var i = 2; i <= num; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }
// var number = +prompt("write any factorial number!");
// var result = factorial(number);
// alert("The factorial of " + number + " is: " + result);

// // Q no 7
// function counting (){
//     var firstNum = +prompt("enter the starting number!");
//     var lastNum = +prompt("Enter the last number in which you want to end the counting!");
//     if(firstNum <= lastNum){

//     for(i=firstNum ; i<= lastNum ; i++ ) {
// document.write(" "+i+" ");
//     }
//     }else{
//         alert("starting number is greater than ending number!");
//     }
// }
// counting();

// // Q no 8
// function triangle(){
//     var base = +prompt("enter the base of right angle triangle!");
//     var perpendicular = +prompt("enter the prependicular of right angle triangle!");
//     var squareOfBase = base*base;
//     var sqaureOfPrep = perpendicular*perpendicular;
//     var hypotenuse = sqaureOfPrep+squareOfBase
//     var squareRoot = Math.sqrt(hypotenuse);            ///// Math.sqrt() is used for taking square root of number
//     alert(squareRoot);
// }
// triangle()

// // Q no 9
// function rectangle (width ,height){
//     return width*height  /// area formula
// }
// var area = rectangle(5,7)
// console.log(area);

//  ------- end -------