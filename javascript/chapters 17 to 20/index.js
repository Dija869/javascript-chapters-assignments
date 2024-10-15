// Q no 1
// var foods =["biryani","haleem","nihari",["drinks"],"qorma"];
// console.log(foods[3]);
// console.log(foods);

// Q no 2
// var nums  =[0,1,2, [1,0, [2,1,0,1] ,1,2] ,3];
// console.log(nums);
// console.log(nums[3]);
// console.log(nums[3][2]);

// Q no 3
// var counting = prompt("do you want counting?");
// for(i=0 ; i<11 ; i++ ){
//     if (counting==="yes") {
//         document.write("<center><h1>"+ i+ "</h1></center>");
//     }
// }

// Q no 4
// var userInput1 = +prompt("Enter a number to show its mmultiplication table:");
// var userInput2 = +prompt("Enter the number where the table ends:");
// for(i=1; i<= userInput2 ; i++){
//     //for checking the condition is working or not     // document.write(i +"</br>")
//  for (j=1; j<=userInput2 ; j++) {
//      //for checking the condition is working or not    // document.write(j)
// }
// document.write("<center>"+userInput1+" X "+i+" = " +userInput1*i + "</center>")
// }


// Q no 5
// var fruits =["apple","banana","grapes","mango","stawberry"];
// for(i=0; i<= 4; i++) {   
//     document.write(fruits[i]+"</br>")
// }

//Q no 6
// var userInput = prompt(`what do you want?
//     a)Counting
//     b)Reverse counting
//     c)Even numbers 
//     d)Odd numbers
//     e)Series`).toLowerCase();

// for (i = 1; i <= 20; i++) {
//     if (userInput === "counting" || userInput === "a") {
//         document.write("<center> <h1> " + i + "</h1> </center>")
//     }
// }

// for (i = 20; i >= 1; i--) {
//     if (userInput === "reverse counting" || userInput === "b") {
//         document.write("<center> <h1> " + i + "</h1> </center>")
//     }
// }

// for (i = 1; i <= 10; i++) {
//     if (userInput === "even numbers" || userInput === "c") {
//         document.write(i + i + "</br>")
//     }
// }

// for (i = 1; i <= 20; i += 2) {
//     if (userInput === "odd numbers" || userInput === "d") {
//         document.write( "<h1> <center>"+ i + "</h1> </center>")
//     }
// }

// for (i = 1; i <= 10; i++) {
//     if (userInput === "series" || userInput === "e") {
//         document.write(i + i +"K"+ "</br>")
//     }
// }

// Q no 7
// var bakeryItems =["cake", "apple pie","cookies","chips","patties"];
// var input = prompt(`what you like to eat?
//   cake , apple pie ,  cookies , chips , patties  `).toLowerCase();
// for(i=0 ; i <= bakeryItems[input] ; i++){

// if(bakeryItems[input]===bakeryItems[i]){
//     alert("avalaible")
//  }
// else{
//     alert("not avaliable")
// }
// }

//////   or  //////

// Q no 7
// var bakeryItems =["cake", "apple pie","cookies","chips","patties"];
// var input = prompt(`WELCOME TO NAQVI'S BAKERS
// what you like to eat?
//   cake , apple pie ,  cookies , chips , patties  `).toLowerCase();
//  if(input==="cake"){
//     alert("avalaible")
//  }else if (input === "apple pie"){
//     alert("avalaible")
//  }else if (input === "cookies"){
//     alert("avalaible")
//  }else if(input === "chips"){
//     alert("avalaible")
//  }else if (input === "patties"){
//     alert("avalaible")
//  }
// else{
//     alert("not avalaible")
// }

// Q no 8 
// var numbers = [24 , 53 , 78 , 91 , 12];
// var usernum = +prompt(`guess the largest number!
//     24 , 53 , 78 , 91 , 12`);
// if(usernum === 24 || usernum === 53 ||usernum === 78|| usernum === 12){
// alert("ohh no! your answer is not correct")
// }else{
//     alert("hooray !!! your answer is correct")
// }

// Q no 9
// var numbers = [24 , 53 , 78 , 91 , 12];
// var usernum = +prompt(`guess the smallest number!
//     24 , 53 , 78 , 91 , 12`);
// if(usernum === 24 || usernum === 53 ||usernum === 78|| usernum === 91){
// alert("ohh no! your answer is not correct")
// }else{
//     alert("hooray !!! your answer is correct")
// }

// Q no 10
// var multiples = prompt("you want multiples of 5?");
// for(i=1; i<= 50; i++){
//     document.write(5+ " X " + i + " = " + i*5 +"</br>")
// }