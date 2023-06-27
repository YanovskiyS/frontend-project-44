import readlineSync from 'readline-sync';

const gameLogic = (rules, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  let count = 0;
  for (let i = 1; count < 3; i += 1) {
    const pairOfQuestionAndResult = task();
    console.log('Question:', pairOfQuestionAndResult[0]);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = (pairOfQuestionAndResult[1]);

    if (answer === rightAnswer) {
      console.log('Correct!');
      count += 1;
    } else if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, ${userName}`);
      count = 0;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gameLogic;
