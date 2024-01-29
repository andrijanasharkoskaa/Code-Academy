//1. Letter Finder function
// function letterFinder(word, match) {
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === match) {
//       console.log("Found the", match, "at", i);
//     } else {
//       console.log("---No match found at", i);
//     }
//   }
// }
// letterFinder("test", "t");

//2.Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// var currentDate = new Date();
// console.log("Today is:", currentDate.getDay);

// console.log(
//   "Current time is:",
//   currentDate.getHours(),
//   "PM",
//   ":",
//   currentDate.getMinutes(),
//   ":",
//   currentDate.getSeconds()
// );

// 3.Write a JavaScript program to print the current window contents.
// function printWindow() {
//   window.print();
// }

// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
// function calculateArea(a, b, c) {
//   let s = (a + b + c) / 2;
//   return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }

// calculateArea(5, 6, 7);

// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

// function rotateString(str) {
//   let characters = str.split("");

//   let lastChar = characters.pop();
//   characters.unshift(lastChar);

//   let rotatedStr = characters.join("");

//   return rotatedStr;
// }

// console.log(rotateString("w3resource"));

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function leapYear(year) {}

// 7.Write a JavaScript program to calculate multiplication and division of two numbers (input from the user) - I have created inputs in the HTML doc
// let numebr1 = document.getElementById("number-one");
// let number2 = document.getElementById("number-two");
// let p = document.getElementById("result");

// function multiply() {
//   let result = numebr1.value * number2.value;
//   p.innerText = result;
// }
// function divide() {
//   let result = numebr1.value / number2.value;
//   p.innerText = result;
// }

// 8. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

// 9. Write a JavaScript program to get the website URL (loading page).

// function getURL() {
//   const currentURL = window.location.href;
//   console.log(currentURL);
// }

// getURL();

// 10.Write a JavaScript exercise to create a variable using a user-defined name.

// 11.Write a JavaScript exercise to get the filename extension.
