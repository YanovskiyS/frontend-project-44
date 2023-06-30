import readlineSync from 'readline-sync';

const runGame = (rules, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  const numberOfRounds = 3;
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const pairOfQuestionAndResult = getRoundData();
    const [numberForQuestion, rightAnswer] = pairOfQuestionAndResult;
    console.log('Question:', numberForQuestion);
    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runGame;
