#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Game Variables
let enemies = ["💀 Skeleton", "🧟 Zombie", "🦹 Warrior", "🥷 Assassin"];
let maxEnemyHealth = 75;
let enemyAttackDamageToHero = 25;
// Player Variables
let heroHealth = 100;
let attackDamageToEnemy = 50;
let numHealthPotions = 3;
let healthPotionHealAmount = 30;
let healthPotionDropChance = 50; // percent
let gameRunning = true;
console.clear();
console.log(chalk.magenta("\n\t     Welcome to the dungeon!"));
GAME: while (gameRunning) {
    console.log("<<----------------------------------------------->>");
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(chalk.yellow(`\t # ${enemy} has appeared! #\n`));
    while (enemyHealth > 0) {
        console.log(chalk.cyan(`\n\t🙎 Your HP: ${heroHealth}`));
        console.log(chalk.red(`\t${enemy}'s HP: ${enemyHealth}\n`));
        let options = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "What would you like to do?",
            choices: ["1. Attack", "2. Drink Health Potion", "3. Run!"],
        });
        if (options.ans === "1. Attack") {
            let damageDealt = Math.floor(Math.random() * attackDamageToEnemy + 1);
            let damageTaken = Math.floor(Math.random() * enemyAttackDamageToHero + 1);
            enemyHealth -= damageDealt;
            heroHealth -= damageTaken;
            console.log(chalk.green(`\n> You strike the ${enemy} for ${damageDealt} damage.`));
            console.log(chalk.red(`> ${enemy} strikes you for ${damageTaken} damage.`));
            if (heroHealth < 1) {
                console.log(chalk.red("You have taken too much damage, you are too weak to go on."));
                break;
            }
        }
        else if (options.ans === "2. Drink Health Potion") {
            if (numHealthPotions > 0) {
                heroHealth += healthPotionHealAmount;
                numHealthPotions--;
                console.log(chalk.green(`> You drink a health potion, healing yourself for ${healthPotionHealAmount}.`));
                console.log(chalk.cyan(`> You now have ${heroHealth} HP.`));
                console.log(chalk.cyan(`> You have ${numHealthPotions} health potion(s) left.\n`));
            }
            else {
                console.log(chalk.red("> You have no health potions left! Defeat enemies for a chance to get one!\n"));
            }
        }
        else if (options.ans === "3. Run!") {
            console.log(chalk.yellow(`You run away from the ${enemy}!`));
            continue GAME;
        }
        else {
            console.log(chalk.red("Invalid command!"));
        }
    }
    if (heroHealth < 1) {
        console.log(chalk.red("You limp out of the dungeon, weak from battle."));
        break;
    }
    console.log("-----------------------------------------------");
    console.log(chalk.green(`# ${enemy} was defeated! #\n`));
    console.log(chalk.cyan(`# You have ${heroHealth} HP left. #`));
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber < healthPotionDropChance) {
        numHealthPotions++;
        console.log(chalk.green(`# The ${enemy} dropped a health potion! #`));
        console.log(chalk.cyan(`\n# You now have ${numHealthPotions} health potion(s). #`));
    }
    console.log("-----------------------------------------------\n");
    let userOptions = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "What would you like to do now?",
        choices: ["1. Continue fighting", "2. Exit dungeon"],
    });
    if (userOptions.ans === "1. Continue fighting") {
        console.log(chalk.magenta("\n\t   You continue on your adventure!"));
    }
    else if (userOptions.ans === "2. Exit dungeon") {
        console.log(chalk.magenta("You exit the dungeon, successful from your adventures!"));
        break;
    }
    console.log(chalk.magenta("\t  ################################"));
    console.log(chalk.magenta("\t      # THANKS FOR PLAYING #"));
    console.log(chalk.magenta("\t  ################################\n"));
}
