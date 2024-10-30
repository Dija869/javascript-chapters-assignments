/////// Date methods //////

// // Q no 1
// var currentDate = new Date();
// alert(currentDate)

// // Q no 2
// var currentDate = new Date();
// var monthNames = ["january" , "february" , "march" , "april" , "may","june","july" ,"august" ,"september","october","november ","december"];
// var months = currentDate.getMonth();
// if(months = 0){
//     alert( months + ": is the month index no and the month name is january")
// }else if(months = 1){
//     alert( months + ": is the month index no and the month name is february")
// }else if(months = 2){
//     alert( months + ": is the month index no and the month name is march")
// }else if(months = 3){
//     alert( months + ": is the month index no and the month name is april")
// }else if(months = 4){
//     alert( months + ": is the month index no and the month name is may")
// }else if(months = 5){
//     alert( months + ": is the month index no and the month name is june")
// }else if(months = 6){
//     alert( months + ": is the month index no and the month name is july")
// }else if(months = 7){
//     alert( months + ": is the month index no and the month name is august")
// }else if(months = 8){
//     alert( months + ": is the month index no and the month name is september")
// }else if(months = 9){
//     alert( months + ": is the month index no and the month name is october")
// }else if(months = 10){
//     alert( months + ": is the month index no and the month name is november")
// }else if(months =11){
//     alert( months + ": is the month index no and the month name is decemmber")
// }else{
//     alert("it's not a month")
// }

// // Q no 3
// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// if (currentDay === 0) {
//     alert( "today is Sun")
// } else if (currentDay === 1) {
//     alert( "today is Mon")
// } else if (currentDay === 2) {
//     alert( "today is Tue")
// } else if (currentDay === 3) {
//     alert( "today is Wed")
// } else if (currentDay === 4) {
//     alert( "today is Thu")
// } else if (currentDay === 5) {
//     alert( "today is fri")
// } else if (currentDay === 6) {
//     alert( "today is Sat")
// }

// // Q  no 4
// var userinput = prompt("whats the day is today").toLowerCase();
// if(userinput === "sat" || userinput === "saturday"|| userinput === "sun" || userinput === "sunday"){
// alert("It's a fun day")
// }else{
//     alert("It's a busy day")
// }

// // Q no 5
// var userInput = prompt("enter the current date!");

// or

// var currentDate = new Date();
// var date = currentDate.getDate();
// if(date <= 15){
//     alert(" First Fifteen days of the month")
// }else{
//     alert("Last days of the month")
// }


// // Q no 6
// var date = new Date();
// var currentDate = date;
// var currentMilliSec = date.getTime();
// var currentMins = date.getMinutes()
// alert("Current Date: "+ currentDate+"\n Elapsed Milli seconds since January 1,1970 : "+currentMilliSec+"\n Elappsed Minutes since January 1,1970 : "+currentMins);

// // Q no 7
// var currentDate = new Date();
// var time = currentDate.getHours();
// if(time<=11){
//     alert("It's AM")
// }else{
//     alert("It's PM")
// }

// // Q no 8
// var laterDate = new Date(2020,11,31); 
// alert(laterDate.toDateString())          //// todatestring is wjha sy date show hoi hai wrna pura time sb show hota


// // Q no  9
// var ramadanStart = new Date(2015, 5, 18);
// var currentDate = new Date();
// var timeDifference = currentDate - ramadanStart;
// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert(  daysPassed+" days passed since 1st Ramadan, 2015" );

// // Q no 10
// var referenceDate = new Date();
// var beginningOf2015 = new Date(2015, 0, 1);
// var timeDifference = referenceDate - beginningOf2015;
// var secondsElapsed = Math.floor(timeDifference / 1000);
// alert("On refernce date "+ beginningOf2015 + secondsElapsed +"had passed since beginning of 2015")

// // Q no 11
// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// document.write("Current Date and Time: " + new Date().toString() + "<br>");
// document.write(" Time (1 hour ahead): " + currentDate.toString());

// // Q no 13
// var userAge = +prompt("Enter your age!");
// var current = new Date();
// var years = current.getFullYear()-userAge;
// alert("your age is : "+userAge+"\n your birth year is : " +years)

// // Q no 14
// var customerName = prompt("Enter your name!");
// var currentDate = new Date();
// var months = currentDate.getMonth()+1;
// var numOfUnits = 401;
// var chargePerUnits = 16 ;
// var netAmount = numOfUnits*chargePerUnits;
// var latePayment = 350;
// var grossAmount = netAmount + latePayment;

// document.write("<h1>K-Electric Bill</h1> \n<p> customer name :"+customerName+"</p> \n  <p> Month : " +months+ " </p> \n <p> Number of units :"+numOfUnits +" </p> \n <p>  Charge per units : " +chargePerUnits+"</p> \n <p> Net Amount Payable(Within due date):  "+netAmount +"</p> \n <p>Late payment charges :  "+ latePayment +"</p>  \n <p>Gross Amount Payable :  "+grossAmount+ "</p> ")

//  --------- end ---------