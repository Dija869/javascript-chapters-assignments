//////// Events //////

// // Q no 1
// function para() {
//     var para2 = `<form action="">
//     <p>Email:</p>
//     <input type="text">
//     <p>Password:</p>
// <input type="password" >

// </form>`
//     document.getElementById("read").innerHTML = para2
// }

// // Q no 2
// function info() {
//     var extraText = `<p> JavaScript methods are functions that are associated with objects or data types in JavaScript. They allow you to perform specific actions or operations on that object or data. Methods can be part of built-in objects (like Array, String, Math, etc.), or you can define custom methods for your own objects.</p>`

// document.getElementById("text").innerHTML =extraText
// }

// // Q no 3
// function delt() {
//   var del =  document.getElementById("del-btn");
//   if(del == onclick){
// del.parentNode.parentNode.remove(td)

//   }

// }





//  -----------by the help chat gpt ------
// Initial student data (just in case)
// var students = [];

// // Function to add a student row to the table
// function addStudentRow(student, index) {
//   var table = document.getElementById("student-table").getElementsByTagName('tbody')[0];

//   // Create a new row
//   var row = table.insertRow(table.rows.length);

//   // Create cells in the row for Name, Age, Class, and Actions
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   var cell3 = row.insertCell(2);
//   var cell4 = row.insertCell(3);

//   // Insert student details in the cells
//   cell1.innerHTML = student.name;
//   cell2.innerHTML = student.age;
//   cell3.innerHTML = student.class;

//   // Create Edit and Delete buttons
//   var editBtn = document.createElement('button');
//   editBtn.innerHTML = 'Edit';
//   editBtn.onclick = function() {
//     showEditForm(index);
//   };

//   var deleteBtn = document.createElement('button');
//   deleteBtn.innerHTML = 'Delete';
//   deleteBtn.onclick = function() {
//     deleteStudentRow(index);
//   };

//   // Add buttons to the Actions cell
//   cell4.appendChild(editBtn);
//   cell4.appendChild(deleteBtn);
// }

// // Function to show the form with student details for editing
// function showEditForm(index) {
//   var student = students[index];
  
//   // Set values of the edit form
//   document.getElementById("edit-name").value = student.name;
//   document.getElementById("edit-age").value = student.age;
//   document.getElementById("edit-class").value = student.class;

//   // Hide the main form and show the edit form
//   document.getElementById("student-form").style.display = "none";
//   document.getElementById("edit-form").style.display = "block";

//   // Store the index of the student being edited
//   document.getElementById("edit-form").setAttribute('data-index', index);
// }

// // Function to update the student details
// function updateStudent() {
//   var index = document.getElementById("edit-form").getAttribute('data-index');
  
//   // Get the updated values
//   var updatedName = document.getElementById("edit-name").value;
//   var updatedAge = document.getElementById("edit-age").value;
//   var updatedClass = document.getElementById("edit-class").value;

//   // Update the student array with new values
//   students[index] = {
//     name: updatedName,
//     age: updatedAge,
//     class: updatedClass
//   };

//   // Rebuild the table
//   rebuildTable();

//   // Reset the edit form and show the main form again
//   document.getElementById("edit-form").style.display = "none";
//   document.getElementById("student-form").style.display = "block";
// }

// // Function to delete a student row
// function deleteStudentRow(index) {
//   // Remove the student from the array
//   students.splice(index, 1);

//   // Rebuild the table
//   rebuildTable();
// }

// // Function to rebuild the table
// function rebuildTable() {
//   // Get the table body
//   var table = document.getElementById("student-table").getElementsByTagName('tbody')[0];

//   // Clear existing rows
//   table.innerHTML = '';

//   // Add each student to the table
//   for (var i = 0; i < students.length; i++) {
//     addStudentRow(students[i], i);
//   }
// }

// // Event listener for the form submission
// document.getElementById("student-form").addEventListener("submit", function(event) {
//   event.preventDefault();

//   // Get form values
//   var name = document.getElementById("name").value;
//   var age = document.getElementById("age").value;
//   var studentClass = document.getElementById("class").value;

//   // Create a new student object
//   var newStudent = {
//     name: name,
//     age: age,
//     class: studentClass
//   };

//   // Add the new student to the array
//   students.push(newStudent);

//   // Add the student to the table
//   addStudentRow(newStudent, students.length - 1);

//   // Reset the form
//   document.getElementById("student-form").reset();
// });

