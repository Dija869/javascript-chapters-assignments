////// string methods ////

// // Q no 1
// var firstName = prompt("write your first name.");
// var lastName = prompt("write your last name.");
// var fullName = firstName+" "+lastName
// alert(" hello! " +  fullName);

// // Q no 2
// var userMobile = prompt("What's your favourite mobile phone model?")
// alert("My favourite mobile phone is : "+ userMobile + ". " + " The length of string is : " +userMobile.length )

// // Q no 3
// var country = "Pakistan";
// alert(country.indexOf("n"))   // jo bhi value dy gy uska index no btye gaa

// // Q no 4
// var greeting = "Hello World!";
// document.write(greeting + " last index of 'l' is " + greeting.lastIndexOf("l"))
// lastIndexOf() //// yeh last sy value prefer krta hai

// // Q no 5
// var nationality = "Pakistani";
// alert(nationality.charAt(3));   // i   /// jo bhi index no likhye ggy uski value btye ga

// //Q no 6
// var firstName = prompt("write your first name.");
// var lastName = prompt("write your last name.")
// alert(firstName.concat(" "+lastName))

// // Q no 7
// var city = "Hyderabad";
// alert(city.replace("Hyderabad","Islamabad"))

// // Q no 8
// var message ="Ali and Sami are best friends. They play cricket and football together.";
// message = message.replaceAll("and","&")
// alert(message)

// // Q no 9
// var numbers = 476;
// console.log(numbers);
// console.log(numbers.toString())
// console.log(typeof numbers.toString())

// // Q no 10
// var favBiscuits = prompt("write your favourite biscuits?").toUpperCase();
// alert(favBiscuits);

// // Q no 11
// var lang = prompt("which language do you study nowadays?").toLowerCase();
// alert(lang)


// // Q no 12
// var number = 35.678;
// number = number.toString().replace('.', '')
// console.log(number);
// console.log(typeof number);

// // Q no 13
// var code = prompt("write your ASC II code here! " );
// if(code=code.startsWith("@")){
// console.log("incorrect");
// }
// else if (code=code.startsWith(",")){
//     console.log("incorrect");
//     }
// else if(code = code.startsWith("!")){
// console.log(("incorrect"));
// }
// else if(code=code.startsWith(".")){
//     console.log("incorrect");
//     }
// else{
//     console.log("ASC II code is "+ code);  
// }

// // Q no 14
// var bakery = ["cake","pineapple","cookies","chips","patties"]
// var userInput = prompt(`which item do you want?
//     cake , pineapple , cookies , chips , patties `).toLowerCase()
// for (var i = 0; i < bakery.length; i++) {
//        if (bakery[i] === userInput) {
//            found = true;
//            break;
//        }
//    }
//  if (found) {
//        alert("The item '" + userInput + "' is available in the list.") ;
//    } else {
//       alert("The item '" + userInput + "' is not found in the list.");
//    }


// // Q no 15
// function isValidPassword(password) {
//        // Check if the password is at least 6 characters long
//        if (password.length < 6) {
//               return false;
//        }

//        if (/^\d/.test(password)) {
//               return false;
//        }

//        var hasLetter = false;
//        var hasNumber = false;
//        for (var i = 0; i < password.length; i++) {
//               var charCode = password.charCodeAt(i);
//               if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//                      hasLetter = true; // Check for letters
//               } else if (charCode >= 48 && charCode <= 57) {
//                      hasNumber = true; // Check for numbers
//               }
//        }

//        return hasLetter && hasNumber;
// }
// function promptForPassword() {
//        var password;
//        do {
//            password = prompt("Please enter your password:");
//            if (!isValidPassword(password)) {
//                alert("Invalid password. Please make sure:\n" +
//                      "- It contains alphabets and numbers.\n" +
//                      "- It does not start with a number.\n" +
//                      "- It is at least 6 characters long.");
//            }
//        } while (!isValidPassword(password));

//        document.getElementById("output").innerText = "Your valid password is: " + password;
//    }

//    promptForPassword( );

// // Q  no 16
// var university = "University of Karachi";
// var universityArray = university.split("");    // () may 2 vaalues dy skhty hain "" and index no khn tk output chahihye
// console.log(universityArray);      // yeh split hota hai "" sy letter to letter separate krye ga. agr " " dye gy toh single words ko array(separate) may ly ga.

// ------- end ------ 