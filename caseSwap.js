const prompt = require("prompt-sync")();
let input = prompt("Enter a sentence/word: "); //prompts user for input and stores it in the input variable
function caseSwap(input) {
  //we create the case swap function that accepts the input as a parameter
  let eachChar = input.split(""); //we convert the input to an array seperated after each character
  //we map each character
  let swappedChar = eachChar.map(
    (i) => (i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase()) //we check if the character is in uppercase and if it is it is changed to lowercase and if not to upper case
  );
  swappedChar = swappedChar.join(""); //later we merge the array of characters back to a string
  console.log(swappedChar); //hence we log the results
}
caseSwap(input); // calls on the function and accepts input variable