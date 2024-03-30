#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let userId = "";
const userPin = 1234;
let current_balance = 10000;
// ------------------------ Asking Username ------------------------
const userName_ans = await inquirer.prompt({
    name: "usr_name",
    type: "input",
    message: chalk.yellow("\nWhat is Your Good Name !"),
});
if (userName_ans.usr_name !== undefined &&
    userName_ans.usr_name !== null &&
    userName_ans.usr_name !== "") {
    userId = userName_ans.usr_name;
}
// ------------------------ Main function ------------------------
async function atm_func() {
    console.log(chalk.yellow.bold("\n\t🏦  Welcome to ATM ! 😃\n"));
    const pin_ans = await inquirer.prompt({
        name: "pin",
        type: "number",
        message: chalk.red("Enter your 4-Digit pin code."),
    });
    if (pin_ans.pin === userPin) {
        console.log(chalk.green.bold(`\n\t👋 Hello ${userId}, welcome to the ATM.🏦\n`));
        console.log(chalk.hex("#FFA500")(`💲 Your Current Balance is: ${current_balance}\n`));
        let anotherTransaction = true;
        while (anotherTransaction) {
            const choice = await inquirer.prompt([
                {
                    type: "list",
                    name: "options",
                    message: chalk.red.bold("Please select an option:"),
                    choices: [
                        "Deposit Amount",
                        "Cash Withdraw",
                        "Balance Check",
                        "Fast Cash",
                    ],
                },
            ]);
            // ------------------------ Deposit Amount ------------------------
            if (choice.options === "Deposit Amount") {
                const Deposit_ans = await inquirer.prompt({
                    name: "deposit_amount",
                    type: "number",
                    message: chalk.red("Enter your Amount to Deposit: "),
                });
                if (Deposit_ans.deposit_amount > 0) {
                    current_balance = current_balance + Deposit_ans.deposit_amount;
                    console.log(chalk.hex("#FFA500")(`\n💲 Your Current Balance is: $${current_balance}\n`));
                }
                else {
                    console.log(chalk.red.bold(`\n\t⚠️ You Entered Invalid Amount.`));
                }
            }
            // ------------------------ Cash-Withdraw ------------------------
            else if (choice.options === "Cash Withdraw") {
                const Withdraw_ans = await inquirer.prompt([
                    {
                        type: "number",
                        name: "amount",
                        message: "Enter the amount to withdraw:",
                    },
                ]);
                if (Withdraw_ans.amount < current_balance && Withdraw_ans.amount > 0) {
                    console.log(`\nWithdrawn $${Withdraw_ans.amount} from your account.`);
                    current_balance = current_balance - Withdraw_ans.amount;
                    console.log(chalk.hex("#FFA500")(`\n💲 Your Current Balance is: $${current_balance}\n`));
                }
                else {
                    console.log(chalk.red.bold(`\n\t⚠️ Insufficient balance or Invalid Amount.`));
                }
            }
            // ------------------------ Balance check ------------------------
            else if (choice.options === "Balance Check") {
                console.log(chalk.hex("#FFA500")(`\n💲 Your Current Balance is: $${current_balance}\n`));
            }
            // ------------------------ Fast cash ------------------------
            else if (choice.options === "Fast Cash") {
                const fast_cash = await inquirer.prompt([
                    {
                        type: "list",
                        name: "options",
                        message: chalk.red.bold("Please select an option:"),
                        choices: [
                            "- Withdraw: $100",
                            "- Withdraw: $500",
                            "- Withdraw: $1000",
                        ],
                    },
                ]);
                if (current_balance >= 100) {
                    if (fast_cash.options === "- Withdraw: $100") {
                        console.log(`\nWithdrawn $100 from your account.`);
                        current_balance = current_balance - 100;
                        console.log(chalk.hex("#FFA500")(`\n💲 Your Current Balance is: $${current_balance}\n`));
                    }
                    else if (fast_cash.options === "- Withdraw: $500") {
                        console.log(`\nWithdrawn $500 from your account.`);
                        current_balance = current_balance - 500;
                        console.log(chalk.hex("#FFA500")(`\n💲 Your Current Balance is: $${current_balance}\n`));
                    }
                    else if (fast_cash.options === "- Withdraw: $1000") {
                        console.log(`\nWithdrawn $1000 from your account.`);
                        current_balance = current_balance - 1000;
                        console.log(chalk.hex("#FFA500")(`\n💲 Your Current Balance is: $${current_balance}\n`));
                    }
                }
                else {
                    console.log(chalk.red.bold(`\n\t⚠️ Insufficient balance or Invalid Amount.`));
                }
            }
            const confirmation_ans = await inquirer.prompt({
                type: "confirm",
                name: "user_confirmation",
                message: chalk.red.bold("Do you want to do another transaction.? "),
            });
            if (confirmation_ans.user_confirmation === false) {
                anotherTransaction = false;
            }
        }
        console.log(chalk.yellow.bold("\n\t🏦 Thank you for using the ATM. Have a great day! 😃"));
        process.exit(); // Code for program end
    }
}
atm_func();
