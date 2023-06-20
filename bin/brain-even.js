#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let count = 0;
for (let i = 1; count < 3; i += 1) {
  const randomNumber = Math.floor(Math.random() * 10);
  console.log(`Questions: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  if ((randomNumber % 2 === 0) && (answer === 'yes')) {
    console.log('Correct!');
    count += 1;
  } else if ((randomNumber % 2 !== 0) && (answer === 'no')) {
    console.log('Correct!');
    count += 1;
  } else if ((randomNumber % 2 === 0) && (answer === 'no')) {
    const answerYes = 'yes';
    console.log(`'no' is wrong answer ;(. Correct answer was ${answerYes}\n Let's try again, ${userName}`);
  } else if ((randomNumber % 2 !== 0) && (answer === 'yes')) {
    count = 0;
    const answerNo = 'no';
    console.log(`'yes' is wrong answer ;(. Correct answer was ${answerNo}\n Let's try again, ${userName}`);
  } else if ((randomNumber % 2 === 0) && (answer !== 'yes')) {
    count = 0;
    console.log(`'${answer}' is wrong answer;(. Correct answer was 'yes' \n Let's try again, ${userName}`);
  } else if ((randomNumber % 2 !== 0) && (answer !== 'no')) {
    count = 0;
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no' \n Let's try again, ${userName} `);
  }
}
console.log(`Congratulatuon, ${userName}`);
