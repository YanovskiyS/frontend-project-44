import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const checkIsEven = (number) => (number % 2 === 0);

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getDataForRound = () => {
  const question = getRandomNumber(1, 10);
  const correctAnswer = checkIsEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGame(rule, getDataForRound);
