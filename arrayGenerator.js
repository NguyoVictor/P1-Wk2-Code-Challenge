// Importing the prompt-sync module to get synchronous input from the user
const prompt = require("prompt-sync")({ sigint: true });

// Prompting the user to enter the two numbers and parsing the input strings into integers
const num1 = parseInt(prompt('Enter num1:'), 10);
const num2 = parseInt(prompt('Enter num2:'), 10);

// Function to generate an array of integers between num1 and num2, inclusive
function arrayGenerator(num1, num2) {
    const numArray = []; // Initialize an empty array to store the generated numbers

    // Iterate from num1 to num2, inclusive, and push each number into numArray
    for (let i = num1; i <= num2; i++) {
        numArray.push(i);
    }

    return numArray; // Return the generated array
}

// Call the arrayGenerator function with the provided inputs and store the result
const generatedArray = arrayGenerator(num1, num2);