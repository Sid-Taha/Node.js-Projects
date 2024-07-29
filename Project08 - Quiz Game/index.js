import inquirer from "inquirer";
console.clear();
console.log("\t\t---------- Welcome to Quiz game ----------\n");
//------------------------------variables------------------------------------
let point = 0;
//------------------------------options------------------------------------
let options = await inquirer.prompt({
    name: "question",
    type: "list",
    message: "Please select",
    choices: ["Array"]
});
//------------------------------Array------------------------------------
if (options.question === "Array") {
    //------------------------------Array Q1------------------------------------
    let array1 = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "What is the correct syntax to declare an array in TypeScript?",
        choices: ["var myArray = {}", "array myArray = []", "const myArray = ()", "let myArray = []"]
    });
    if (array1.ans === "let myArray = []") {
        console.log("correct Answare");
        ++point;
    }
    else {
        console.log("incorrect Answare");
    }
    //------------------------------Array Q2------------------------------------
    let array2 = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "How do you access the third element in an array named 'numbers' in TypeScript?",
        choices: ["numbers.3", "numbers{2}", "numbers(3)", "numbers[2]"]
    });
    if (array2.ans === "numbers[2]") {
        console.log("correct Answare");
        ++point;
    }
    else {
        console.log("incorrect Answare");
    }
    //------------------------------Array Q3------------------------------------
    let array3 = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "Which method adds new elements to the end of an array in TypeScript?",
        choices: ["concat()", "shift()", "pop()", "push()"]
    });
    if (array3.ans === "push()") {
        console.log("correct Answare");
        ++point;
    }
    else {
        console.log("incorrect Answare");
    }
}
//------------------------------result------------------------------------
console.log(`\n 
Your correct answare: ${point}
Your incorrect answare: ${3 - point}
you got ${point} points`);
//------------------------------Again------------------------------------
let confirm = await inquirer.prompt({
    name: "ans",
    type: "confirm",
    message: "\nDo you want to play more?",
});
if (confirm.ans === true) {
    //------------------------------options2------------------------------------
    let options2 = await inquirer.prompt({
        name: "question",
        type: "list",
        message: "Please select",
        choices: ["Function"]
    });
    //------------------------------Function------------------------------------
    if (options2.question === "Function") {
        //------------------------------Function Q1------------------------------------
        let Function1 = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "What does the keyword 'function' signify in typescript?",
            choices: ["A variable declaration", "A loop statement", "A function call", "A function definition"]
        });
        if (Function1.ans === "A function definition") {
            console.log("correct Answare");
            ++point;
        }
        else {
            console.log("incorrect Answare");
        }
        //------------------------------Function Q2------------------------------------
        let Function2 = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "Which symbol is used to define the return type of a function in typescript?",
            choices: [":", "=>", "=", "::"]
        });
        if (Function2.ans === ":") {
            console.log("correct Answare");
            ++point;
        }
        else {
            console.log("incorrect Answare");
        }
        //------------------------------Function Q3------------------------------------
        let Function3 = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "In typescript, what is the purpose of the '=> ' syntax?",
            choices: ["To declare a function", "To assign a value to a variable", "To import a module", "To comment out a line of code"]
        });
        if (Function3.ans === "To declare a function") {
            console.log("correct Answare");
            ++point;
        }
        else {
            console.log("incorrect Answare");
        }
    }
    //------------------------------result------------------------------------
    console.log(`\n 
Your correct answare: ${point}
Your incorrect answare: ${3 - point}
you got ${point} points`);
}
console.log("\t\t---------- Thank you for playing Quiz game ----------\n");
