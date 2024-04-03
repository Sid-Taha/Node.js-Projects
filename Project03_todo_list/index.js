#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let whileCondition = true;
console.log(chalk.yellow.bold("\n\t📝 Welcome to Your To-Do List\n"));
while (whileCondition === true) {
    // ----------------------------------- Options -----------------------------------
    let option = await inquirer.prompt([
        {
            type: "list",
            name: "userOption",
            message: "Select an option:\n",
            choices: ["➕ Add", "📋 Show list", "✏️ Update", "❌ Remove"],
        },
    ]);
    // ----------------------------------- Add -----------------------------------
    if (option.userOption === "➕ Add") {
        let ans = await inquirer.prompt([
            {
                type: "input",
                name: "userAns",
                message: "\nWrite something to add to the task list:",
            },
        ]);
        if (ans.userAns !== "") {
            todoList.push(ans.userAns);
            console.log(chalk.green.bold("\n✅ Task added successfully."));
            console.log(chalk.bold("\n\tUpdated List:"));
            todoList.forEach((item) => {
                console.log(chalk.green(`\t- ${item}`));
            });
            console.log("\n");
        }
        else {
            console.log(chalk.red("\n❗ You cannot enter an empty item in the list.\n"));
        }
    }
    // ----------------------------------- Show list -----------------------------------
    else if (option.userOption === "📋 Show list") {
        if (todoList.length > 0) {
            console.log(chalk.bold("\n\tYour list:"));
            todoList.forEach((item) => {
                console.log(chalk.cyan(`\t- ${item}`));
            });
            console.log("\n");
        }
        else {
            console.log(chalk.yellow("\n\tThe list is Empty\n"));
        }
    }
    // ----------------------------------- Remove -----------------------------------
    else if (option.userOption === "❌ Remove") {
        if (todoList.length > 0) {
            let removeChoice = await inquirer.prompt([
                {
                    type: "list",
                    name: "removeItem",
                    message: "\nSelect an item to remove:",
                    choices: todoList,
                },
            ]);
            let indexToRemove = todoList.indexOf(removeChoice.removeItem);
            if (indexToRemove >= 0) {
                todoList.splice(indexToRemove, 1);
                console.log(chalk.red.bold(`\n❌ You removed: ${removeChoice.removeItem}`));
                console.log(chalk.bold("\n\tUpdated List:"));
                todoList.forEach((item) => {
                    console.log(chalk.green(`\t- ${item}`));
                });
                console.log("\n");
            }
        }
        else {
            console.log(chalk.yellow("\n\tThe To-Do list is Empty. Add something before removing.\n"));
        }
    }
    //  ----------------------------------- Update -----------------------------------
    else if (option.userOption === "✏️ Update") {
        if (todoList.length > 0) {
            let updateShow = await inquirer.prompt([
                {
                    type: "list",
                    name: "updateItem",
                    message: "\nSelect an item to update:",
                    choices: todoList,
                },
            ]);
            let index = todoList.indexOf(updateShow.updateItem);
            let editValue = await inquirer.prompt([
                {
                    type: "input",
                    name: "editItem",
                    message: "\nEnter the updated task:",
                },
            ]);
            if (editValue.editItem !== "") {
                todoList[index] = editValue.editItem;
                console.log(chalk.green.bold("\n✅ Task updated successfully."));
                console.log(chalk.bold("\n\tUpdated List:"));
                todoList.forEach((item) => {
                    console.log(chalk.green(`\t- ${item}`));
                });
                console.log("\n");
            }
            else {
                console.log(chalk.red("\n❗ You cannot update to an empty item.\n"));
            }
        }
        else {
            console.log(chalk.yellow("\n\tThe To-Do list is Empty. Please add tasks before updating.\n"));
        }
    }
    // ----------------------------------- Confirmation -----------------------------------
    let userAns = await inquirer.prompt([
        {
            type: "confirm",
            name: "selection",
            message: "Do you want to continue?",
            default: true,
        },
    ]);
    if (userAns.selection === false) {
        whileCondition = false;
    }
}
console.log(chalk.yellow.bold("\n\tThank you for using To-Do List. 😊"));
