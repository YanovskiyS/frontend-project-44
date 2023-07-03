import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = () => {
  const question = getRandomNumber(1, 30);
  let answer;
  if (question < 2) {
    answer = 'no';
  } else if (question === 2) {
    answer = 'yes';
  }
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      answer = 'no';
      break;
    } else {
      answer = 'yes';
    }
  }
  return [question, answer];
};

const RunPrime = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  runGame(rule, isPrime);
};
export default RunPrime;
