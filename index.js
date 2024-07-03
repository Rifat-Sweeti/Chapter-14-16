// Q1
let studentNames = [];

// Q2
let studentName = Array();

// Q3
let student = ["Rifat", "Fatima", "Ifat", "Zainab"];

// Q4
let numbers = [1, 2, 3, 4, 5];

// Q5
let booleanArray = [true, false, true, false];

// Q6
let mixedArray = [1, "Hello", true, null, [2, 3, 4]];

// Q7
document.write("<h2>QUALIFICATIONS</h2>");
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
for (var i = 0; i < qualifications.length; i++) {
    document.write("<p>" + (i + 1) + ") " + qualifications[i] + "</p>");
}

// Q8
var students = ["Rifat", "Ifat", "Ayesha"];
var scores = [420, 380, 450];
var totalMarks = 500;
var percentages = [];
for (var i = 0; i < scores.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    percentages.push(percentage.toFixed(2) + "%");
}
document.write("<h2>Student Scores and Percentages</h2>");
for (var i = 0; i < students.length; i++) {
    document.write("<p><strong>" + students[i] + "</strong>: Scored " + scores[i] + " out of " + totalMarks + ", which is " + percentages[i] + ".</p>");
}

// Q9
document.write("<h2>Updated Array</h2>");
var colors = ["Red", "Green", "Blue"];
document.write("<p><strong>Initial Array:</strong> " + colors + "</p>");
var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddBeginning);
document.write("<p><strong>Updated Array (Step a & b):</strong> " + colors + "</p>");
var colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd);
document.write("<p><strong>Updated Array (Step c):</strong> " + colors + "</p>");
colors.unshift("Yellow", "Purple");
document.write("<p><strong>Updated Array (Step d):</strong> " + colors + "</p>");
colors.shift();
document.write("<p><strong>Updated Array (Step e):</strong> " + colors + "</p>");
var indexToAdd = prompt("Enter the index where you want to add a color:");
var colorToAdd = prompt("Enter the color name to add:");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("<p><strong>Updated Array (Step f):</strong> " + colors + "</p>");
var indexToDelete = prompt("Enter the index from which you want to delete:");
var numToDelete = prompt("Enter how many colors you want to delete:");
colors.splice(indexToDelete, numToDelete);
document.write("<p><strong>Updated Array (Step g):</strong> " + colors + "</p>");

// Q10
var studentScores = [78, 92, 85, 65, 98];
var n = studentScores.length;
for (var i = 0; i < n-1; i++) {
    for (var j = 0; j < n-i-1; j++) {
        if (studentScores[j] > studentScores[j+1]) {
            var temp = studentScores[j];
            studentScores[j] = studentScores[j+1];
            studentScores[j+1] = temp;
        }
    }
}
document.write("<h2>Sorted Student Scores:</h2>");
document.write("<p>");
for (var k = 0; k < studentScores.length; k++) {
    document.write(studentScores[k]);
    if (k !== studentScores.length - 1) {
        document.write(", ");
    }
}
document.write("</p>");

// Q11
var cities = ["Karachi", "Islamabad", "Murree", "Peshawar", "Hunza"];
var selectedCities = [];
for (var i = 0; i < 3; i++) {
    selectedCities.push(cities[i]);
}
document.write("<h2>Selected Cities:</h2>");
document.write("<p>");
for (var j = 0; j < selectedCities.length; j++) {
    document.write(selectedCities[j]);
    if (j !== selectedCities.length - 1) {
        document.write(", ");
    }
}
document.write("</p>");

// Q12
var arr = ["This", "is", "my", "cat"];
var singleString = "";
for (var i = 0; i < arr.length; i++) {
    singleString += arr[i];
    if (i !== arr.length - 1) {
        singleString += " ";
    }
}
document.write("<h1>" + "Array" + "</h1>");
document.write("<p>" + arr + "</p>");
document.write("<h1>" + "String" + "</h1>");
document.write("<p>" + singleString + "</p>");

// Q13
var fifoQueue = [];
fifoQueue.push("Apple");
fifoQueue.push("Banana");
fifoQueue.push("Orange");
var firstItem = fifoQueue.shift();
var secondItem = fifoQueue.shift();
var thirdItem = fifoQueue.shift();
document.write("<h1>" + "Order" + "</h1>");
document.write("<p>First item: " + firstItem + "</p>");
document.write("<p>Second item: " + secondItem + "</p>");
document.write("<p>Third item: " + thirdItem + "</p>");

// Q14
var fifoQueue = [];
fifoQueue.push("Apple");
fifoQueue.push("Banana");
fifoQueue.push("Orange");
document.write("<h1>" + "Reverse" + "</h1>");
document.write("<p>First item: " + fifoQueue[2] + "</p>");
document.write("<p>Second item: " + fifoQueue[1] + "</p>");
document.write("<p>Third item: " + fifoQueue[0] + "</p>");

// Q15
document.write("<h1>" + "Dropdown" + "</h1>");
let phoneManufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
document.write('<select>');
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write('<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>');
}
document.write('</select>');