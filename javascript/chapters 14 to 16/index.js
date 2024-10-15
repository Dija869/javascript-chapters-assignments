// Q no 1 to 6
// var array /// undefine
// var array =[ , ] /// empty
// var studentNames = []; /// []
// var stringArr =["hello","hey"];
// var numArr = [1 , 2]
// var booleanArr =[false , true]
// var mixedArr =["Naqvi " , 1 , true , "" ];
// console.log(array);

// Q no 7
// var eduInPak = ["SSC","HSC","BSC","BS","BCOM","MS","M-PHILL","PHD"]
// console.log(eduInPak);
// document.write("<h1>" + eduInPak [0]+"</h1>"+ "<h1>" + eduInPak [1]+"</h1>"+"<h1>" + eduInPak [2]+"</h1>" +"<h1>" + eduInPak [3]+"</h1>" +"<h1>" + eduInPak [4]+"</h1>" +"<h1>" + eduInPak [5]+"</h1>" +"<h1>" + eduInPak [6]+"</h1>" + "<h1>" + eduInPak [7]+"</h1>" )

// Q no 8 
// var students =["naqvi" , "saba" ,"eraj"];
// var obtainMarks = [485 , 467 , 494];
// var totalMarks = 550 ;
// document.write("<p>"+students[0] + " is obtain " + obtainMarks[0] + " out of " + totalMarks + " and the percentage of naqvi is " + (obtainMarks[0]/totalMarks)*100 + "</p>" + "<p>"+students[1] + " is obtain " + obtainMarks[1] + " out of " + totalMarks + " and the percentage of saba is " + (obtainMarks[1]/totalMarks)*100 + "</p>" +"<p>"+students[2] + " is obtain " + obtainMarks[2] + " out of " + totalMarks + " and the percentage of eraj is " + (obtainMarks[2]/totalMarks)*100 + "</p>"
// )

// Q no 9 
// var colorNames = [" red "," blue "," pink "," purple "," green "," yellow "];
//  document.write(colorNames)

 ////////// a) 
 ///  var userInput = prompt("which color do you want to add in start of the list?")
// var favColor = colorNames.unshift(userInput)
// document.write(colorNames)

///////////b) 
/// var userInput = prompt("which color do you want to add iin last of this list?");
// var lastColor = colorNames.push(userInput);
// document.write(colorNames)

////////// c)  
//  var userInput1 = prompt("which color do you want to add in the list?");
//  var userInput2 = prompt("which color do you want to add in the list?");
// var twoColors = colorNames.unshift(userInput1) ; colorNames.unshift(userInput2)
// document.write(colorNames)


//////////// d) 
/// var favColor = colorNames.shift()
// document.write(colorNames)

/////////// e) 
/// var lastcolor = colorNames.pop()
//   document.write(colorNames)

/////////// f)
// var userInput1 = prompt("which color you want to add in this list ? ");
// var userInput2 = +prompt("on which index number?");
// var userColor = colorNames.splice(userInput2,0,userInput1);
// document.write(colorNames)
 
/////////// g)
// var userInput1 = +prompt("which color do you want to delete from in this list write their index no?  \n {red , blue , pink , purple ,green , yellow}");
// var userInput2 = +prompt("how many color you want to delete?");
// var delColors = colorNames.splice(userInput1,userInput2);
// document.write(colorNames)

// Q no 10
// var studentScores = [ 320 , 230 , 480 , 120 ];
// var scores = studentScores.sort()
// console.log(scores);

// Q no 11
// var cities =[ "karachi", "lahore","islamabad","quetta","peshawar"];
// var favCities = cities.slice(2,4);
// document.write(favCities);

// Q no 12
// var arr = ["this","is","my","cat"];
// var sen= arr.join();
// console.log(sen);

// Q no 13
// var fifo =["first" ,"in","first","out"];
 // var arr1 =fifo.shift()
 // console.log(fifo);
// var arr2 =fifo.unshift("FIFO")
// console.log(fifo);




