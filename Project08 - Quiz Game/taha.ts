import inquirer from "inquirer";
import { json } from "stream/consumers";
//------------------------------Welcome------------------------------------
console.clear();
console.log("\t\t---------- Welcome to Quiz game ----------\n");

//------------------------------variables------------------------------------
let point = 0;
let running = true;
let num_of_question = 0

async function quiz() {
  try {
    while (running) {
      let data = await fetch(
        "https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=boolean"
      );
      let obj = await data.json()

      let question = await inquirer.prompt({
        name: "ans",
        type: "confirm",
        message: obj.results[0].question,
      });

      ++num_of_question

      let api_ans = Boolean(obj.results[0].correct_answer.toLowerCase())

      
      
      if (question.ans === api_ans) {
        console.log("correct answare");
        ++point;
      }else{
        console.log("incorrect answare");
      }

      let confirm = await inquirer.prompt({
        name: "ans",
        type: "confirm",
        message: "\nDo you want to continue?",
      });

      if (confirm.ans === false) {
        running = false;
      }
    }
  } catch (error) {
    console.log(error);
  }

  console.log(`\n
your Correct answare are: ${point}
your inCorrect answare are: ${num_of_question - point}
your total point are: ${point} from ${num_of_question}`);
  
  //------------------------------Thank you------------------------------------
  console.log("\n\t\t---------- Thank you for playing Quiz game ----------\n");
}

quiz();
