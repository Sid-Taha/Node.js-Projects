#! /usr/bin/env node
// In this project, you will build a countdown timer using the date module.
// 1 jan 1970 00:00:00
// '2025-01-01T00:00:00'
// let a = await inquirer.prompt({
//     name: "ans",
//     type:"input",
//     message: "what is your date of birth ('year-month-days')"
// })
let timer = setInterval(() => {
    let newYear_2025 = new Date('2024-07-01T05:11:00');
    let now = new Date();
    let diff = newYear_2025.getTime() - now.getTime();
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let min = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    let sec = Math.floor(diff % (1000 * 60) / (1000));
    console.log(`Days:${days} - Hours:${hours} - Minutes:${min} - Second:${sec}`);
    if (days < 0 && hours < 0 && min < 0 && sec < 0) {
        clearInterval(timer);
        console.log("Time Up");
    }
}, 1000);
export {};
