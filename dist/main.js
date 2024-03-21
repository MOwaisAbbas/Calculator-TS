import inquirer from "inquirer";
// Define the questions to prompt the user
const questions = [
    {
        type: 'number',
        name: 'numberOne',
        message: 'enter number one?',
    },
    {
        type: 'number',
        name: 'numberTwo',
        message: 'Enter number two?',
    },
    {
        type: 'list',
        name: 'operator',
        message: 'Enter operator?',
        choices: ['+', '-', '*', '/']
    },
];
const answer = await inquirer.prompt(questions);
const { numberOne, numberTwo, operator } = answer;
let result;
switch (operator) {
    case '+':
        result = numberOne + numberTwo;
        break;
    case '-':
        result = numberOne - numberTwo;
        break;
    case '*':
        result = numberOne * numberTwo;
        break;
    case '/':
        result = numberOne / numberTwo;
        break;
    default:
        throw new Error('Invalid operator');
}
console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);
