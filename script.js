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

function rotateString(str) {
  let characters = str.split("");

  let lastChar = characters.pop();
  characters.unshift(lastChar);

  let rotatedStr = characters.join("");

  return rotatedStr;

  // let lastLetter = strArr.pop();
  // console.log(lastLetter);
}

console.log(rotateString("w3resource"));
