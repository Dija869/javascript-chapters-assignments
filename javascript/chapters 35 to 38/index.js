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
function numbers(num1, num2, operator) {
    var first = +prompt("enter any number!");
    var second = +prompt("enter second number!");
    var operation = prompt("which operation do you want to apply between these numbers?");
    switch (operation) {
        case '+':
            solve = first + second;
            break;
        case '-':
            solve = first - second;
            break;
        case '*':
            solve = first * second;
            break;
        case '/':

            if (second !== 0) {
                solve = first / second;
            } else {
                solve = 'Error: Division by zero';
            }
            break;
        default:
            solve = 'Error: Invalid operator';
    }

    alert("Result: " + solve);
}

numbers();