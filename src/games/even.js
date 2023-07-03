import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = () => {
  const randomNumber = getRandomNumber(1, 10);
  let answer;
  if (randomNumber % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [randomNumber, answer];
};

const runIsEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(rule, isEven);
};
export default runIsEven;
