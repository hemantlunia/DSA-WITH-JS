import PromptSync from "prompt-sync";
import Stack from "./stack.js";

const prompt = PromptSync();
let stack = new Stack();

// console.log(userNum);

let exit = false;
while (!exit) {
  let userChoice = prompt(`Please slect the choice below
        1. press 1 for adding new domain
        2. press 2 to see the curren domain
        3. press 3 to go back
        4. press 4 exit
    `);

  const userNum = parseInt(userChoice);
  switch (userNum) {
    case 1:
      const domainName = prompt("Please give me domain Name : ");
      stack.push(domainName);
      console.warn(domainName);
      break;
    case 2:
      console.log(stack.peek());
      break;

    case 3:
      stack.pop();
      console.log(stack.peek());
      break;

    case 4:
      exit = true;
  }
}
