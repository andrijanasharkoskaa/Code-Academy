// async function fetchData() {
//   const url = "https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf";
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
//       "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();
// let triviaEl = document.querySelector(".trivia");

// async function fetchData(num) {
//   const url = `https://numbersapi.p.rapidapi.com/${num}/trivia?fragment=true&notfound=floor&json=true`;
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "b9f1ddeb5dmsh96c197d04248295p1f0472jsnabdf8ddab62f",
//       "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     const newFact = document.createElement("li");
//     newFact.innerText = `${result.number} - ${result.text}`;
//     triviaEl.appendChild(newFact);
//     console.log(result.number, result.text, result.found);
//   } catch (error) {
//     console.error(error);
//   }
// }

// const fetchButton = document.getElementById("fetchButton");

// fetchButton.addEventListener("click", function () {
//   const num = Math.floor(Math.random() * 101);
//   fetchData(num);
// });

let triviaEl = document.querySelector(".trivia");
let btnCheck = document.getElementById("fetchButton");
async function fetchDefinition(word) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchDefinition("love");

// btnCheck.addEventListener("click", async function () {
//   const newWord = document.createElement("li");
//   newWord.innerText = await fetchDefinition(word);
//   triviaEl.appendChild(newWord);
// });

// let triviaEl = document.querySelector(".trivia");
// let btnCheck = document.getElementById("fetchButton");

// async function fetchDefinition(word) {
//   const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     // Assuming the API response structure, you may need to adjust this accordingly
//     const definition = data[0]?.meanings[0]?.definitions[0]?.definition;
//     return definition;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }

// btnCheck.addEventListener("click", async function () {
//   const word = "dog"; // Change this to the word you want to fetch
//   const definition = await fetchDefinition(word);
//   if (definition) {
//     const newWord = document.createElement("li");
//     newWord.innerText = `${word}: ${definition}`;
//     triviaEl.appendChild(newWord);
//   } else {
//     console.error("Failed to fetch definition.");
//   }
// });
