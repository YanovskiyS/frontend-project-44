import readlineSync from 'readline-sync';

const salutation = (rules, task) => {
  console.log('Welcome to yhe brain games');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let i = 1; i < 4; i += 1) {
    const pairOfQuestionAndResult = task();
    console.log('question', pairOfQuestionAndResult[0]);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = pairOfQuestionAndResult[1];

    if (answer === rightAnswer) {
      console.log('Correct!');
    } else if (answer !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}\n Let's try again, ${userName}`);
    }
  }
  console.log(`Congratulatuon, ${userName}`);
};
export default salutation;
