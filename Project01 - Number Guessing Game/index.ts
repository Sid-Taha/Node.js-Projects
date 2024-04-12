#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"

// Generate a random number between 1 and 4
let randomNumber: number = Math.floor((Math.random() * 4) + 1);

// Ask the user to input a number between 1 and 4
let userInput = await inquirer.prompt([
    {
        type: "number",
        name: "guessedNumber",
        message: "Guess a number between 1 and 4 🎲"
    }
]);

// Check if the user's input matches the random number
if (userInput.guessedNumber === randomNumber) {
    console.log(chalk.green.bold('\n\tCongratulations! 🎉 You guessed correctly! 😃'));
} else {
    console.log(chalk.red.bold(`\n\tSorry! 💀💀💀 Better luck next time! The correct number was ${randomNumber}.`));
}
