#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const ans = await inquirer.prompt(   [
  
  
  
  {
    message: chalk.red.bold("Enter your First number: "),
    type: "number",
    name: "First_number",
  },




  {
    message: chalk.red.bold("Enter your Second number: "),
    type: "number",
    name: "Second_number",
  },

  
  {
    message: "Select type of calculation: ",
    type: "list",
    name: "operator",
    choices: [
      chalk.hex('#FFA500')("Addition: (+)"),
      chalk.yellow("Subtraction: (-)"),
      chalk.green("Mutiplication: (x)"),
      chalk.magenta("Division: (/)"),
    ],
  },
]);


// -----------------------  Conditions  -----------------------  
if (ans.operator === chalk.hex('#FFA500')("Addition: (+)")) {
  console.log(
    chalk.green.bold(`\nResult is:  ${ans.First_number + ans.Second_number}\n`)
  );
} else if (ans.operator === chalk.yellow("Subtraction: (-)")) {

  console.log(chalk.green.bold(`\nResult is:  ${ans.First_number - ans.Second_number}\n`)
  );
} else if (ans.operator === chalk.green("Mutiplication: (x)")) {

  console.log(chalk.green.bold(`\nResult is:  ${ans.First_number * ans.Second_number}\n`)
  );
} else if (ans.operator === chalk.magenta("Division: (/)")) {

  console.log(chalk.green.bold(`\nResult is:  ${ans.First_number / ans.Second_number}\n`)
  );
}
