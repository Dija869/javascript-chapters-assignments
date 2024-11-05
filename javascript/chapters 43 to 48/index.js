//////   Events    ////////

// // Q no 1
function box() {
    alert("hello new customer!")
}
// // Q no 2
function mobile() {
    alert("this mobile phone is soldout")
}

// // Q no 3
function buttons() {
    var deleteButtons = document.getElementsByClassName('delete-btn');

    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = function () {
            var row = this.parentNode.parentNode;
            row.parentNode.removeChild(row)
        }
    }
}

// // Q no 4
function hover() {
    document.getElementById("image-Q4").src = "./assets/download (4).jfif"

}
function hoverRemove() {
    document.getElementById("image-Q4").src = "./assets/images (1).jfif"
}

// // Q no 5   (solve by the help of chatgpt)
document.addEventListener('DOMContentLoaded',function () {
    // Initialize counter variable
    var counter = 0;

    // Get the element where counter value will be displayed
    var counterElement = document.getElementById('counter-value');
    
    // Get the buttons
    var increaseButton = document.getElementById('increase-btn');
    var decreaseButton = document.getElementById('decrease-btn');
    function updateCounter() {
        counterElement.textContent = counter;
    }

    // Add event listener to the "Increase" button
    increaseButton.onclick = function() {
        counter++;  // Increase the counter
        updateCounter();  // Update the displayed value
    };

    // Add event listener to the "Decrease" button
    decreaseButton.onclick = function() {
        counter--;  // Decrease the counter
        updateCounter();  // Update the displayed value
    };
});