#! /usr/bin/env node
import inquirer from "inquirer"

//-----------------------------------------Name Question----------------------
let asked_name = await inquirer.prompt({
     name : "ans",
     type : "input",
     message : "What is your name?"
})

//-----------------------------------------Personality Question----------------------
let Question = await inquirer.prompt({
     name : "ans",
     type : "number",
     message : "If you are talkative person type 1, If you dont like to talk type 2"
})

//-----------------------------------------Person Class----------------------
class Person {
     Personality : string = "No personality"
     
     constructor (Personality : string){
          if (Personality != "") {
               this.Personality  = Personality 
          } 
     }
     
      askQuestion (value: number) {
          if (value === 1) {
               this.Personality = "Extrovert"
          }
          else if (value === 2) {
               this.Personality = "Introvert"
          }
          else{
               this.Personality = "Mystery"
          }
     }
}

//-----------------------------------------Student Class----------------------
class Student extends Person{
     private _myName: string = "No Name"

     constructor (Personality : string) {
          super(Personality)
     }
     
     get myName() {
          return this._myName
     }

     
     set myName(parm : string) {
          if (parm !== "") {
               this._myName = parm;
          }
     }

}


let person = new Person("")
person.askQuestion(Question.ans)

let student = new Student("")
student.myName = asked_name.ans

console.log(`Hi ${student.myName},
You have ${person.Personality} Personality.`);

