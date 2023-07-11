import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const checkIsPrime = (num) => {
  if (num < 2) {
    return false;
  } if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getDataForRound = () => {
  const question = getRandomNumber(1, 20);
  const rightAnswer = checkIsPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => runGame(rule, getDataForRound);
