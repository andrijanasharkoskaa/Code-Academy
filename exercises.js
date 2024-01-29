// // const fruits = ["apples", "oranges", "kiwi", "bananas", "pears"];

// // console.log(fruits.length);

// // console.log(fruits.pop());

// // fruits.push("strawberries");
// // console.log(fruits);

// // let filterFruits = fruits.filter((fruit) => fruit.length > 5);

// // console.log(filterFruits);

// // let indexOfFruit = fruits.indexOf("oranges");
// // console.log(indexOfFruit);

// // 1.Make a true statement using a boolean
// let isFemale = true;

// console.log(isFemale);

// // 2. Create a comparison using >=
// let x = 7;
// let y = 10;

// if (x > y) {
//   console.log("X is greater than Y");
// } else if (x === y) {
//   console.log("X is equal to Y");
// } else {
//   console.log("X is smaller than Y");
// }
// // 3.Create a comparison using &&
// let enter = true;
// let age2 = 18;
// if (enter === true && age2 >= 18) {
//   console.log("Eligible!");
// }

// // 4. Create a comparison using || (OR)

// let age = 17;
// let eligibleAge = 18;

// if (age > 18 || age === eligibleAge) {
//   console.log("Your age is eligible");
// }
// // 5. Create a comparison using else if (if any of the values is true)

// // 6.
// const fruits = ["apples", "oranges", "kiwi", "bananas", "pears"];

// console.log(fruits.length);

// // Create a function that gets the password using the prompt() fuction and evoke that function
// // gets the name - if the name's lenght is greater than 5 charachters than show
// // that the p
// function getPassword() {
//   let name = prompt("Enter name");
//   let password = prompt("Enter password");

//   if (name.length > 5) {
//     console.log(password);
//   }
// }
// getPassword();

// function getEvenNumbers() {
//   let numbers = [1, 6, 7, 8, 4, 2, 12, 14, 5];
//   numbers.forEach((element) => {
//     if (element / 2 === 0) {
//       console.log(element);
//     }
//   });
// }

// getEvenNumbers();

// LOOPS

// // FOR LOOP
// const fruits = ["apples", "oranges", "kiwi", "bananas", "pears"];

// for (let index = 0; index < fruits.length; index++) {
//   const element = fruits[index];
//   console.log(element);
// }

// // forEach LOOP
// const vegetables = [
//   "cucumbers",
//   "lettuce",
//   "potatoes",
//   "onion",
//   "garlic",
//   "broccoli",
//   "cauliflower",
//   "peppers",
//   "carrots",
//   "asparagus",
// ];

// vegetables.forEach((element) => {
//   console.log(element);
// });

// // List items from 100 to 0
// for (let number = 100; number >= 0; number--) {
//   console.log(number);
// }

//OBJECTS

// const car = {
//   name: "Ford",
//   year: 2014,
//   sold: true,
// };

// // forIn loop
// for (const key in car) {
//   console.log(key);
// }

// for (const key in car) {
//   console.log(car.name);
// }
