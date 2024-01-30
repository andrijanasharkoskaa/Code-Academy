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
// function userVar() {
//   const userVariable = prompt("Enter a variable");
//   return userVariable;
// }
// userVar();

// 11.Write a JavaScript exercise to get the filename extension.
// function getExtension(file) {
//   const fileExtension = file.split(".");
//   console.log(fileExtension[1]);
// }

// getExtension("myscript.php");

// 12.Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

// function getDifference(num) {
//   if (num - 13 > 13) {
//     return Math.abs(num - 13) * 2;
//   } else {
//     return Math.abs(num - 13);
//   }
// }
// getDifference(27);

// 13. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

// function sumOfTwo(a, b) {
//   if (a === b) {
//     return (a + b) * 3;
//   } else {
//     return a + b;
//   }
// }

// sumOfTwo(5, 5);

// 14. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.
// function absoluteDifference(num) {
//   if (Math.abs(num > 19)) {
//     return Math.abs(num - 19) * 3;
//   } else {
//     return Math.abs(num - 19);
//   }
// }

// absoluteDifference(20);

// 15. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

// function checkNum(a, b) {
//   if (a === 50 || a + b === 50) {
//     return true;
//   } else {
//     return false;
//   }
// }
// checkNum(50, 30);
// checkNum(10, 10);

// 16.Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

// function addPy(str) {
//   if (str[0] === "P" && str[1] === "y") {
//     return str;
//   } else {
//     return "Py" + str;
//   }
// }

// addPy("Python");
// 17. Write a JavaScript program to check two given integers whether one is positive and another one is negative.
// function checkInt(a, b) {
//   if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
//     return "One is positive and one is negative";
//   } else {
//     return "Error";
//   }
// }
// checkInt(5, -1);

// 18.Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

// function removeChar(str, pos) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === pos) {
//     }
//   }
// }

// removeChar("test", 1);

// 19. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

function createNewStr(str) {
  if (str.length >= 1) {
    let firstStr = str[0];
    let lastStr = str.length - 1;
    console.log(firstStr, lastStr);
  }
}

createNewStr("new");
