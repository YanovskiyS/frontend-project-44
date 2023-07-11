import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const findGcd = (num1, num2) => {
  let y = num1;
  let x = num2;
  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }

  return String(x);
};

const rules = 'Find the greatest common divisor of given numbers.';

const getDataForRound = () => {
  const firstNumber = getRandomNumber(1, 30);
  const secondNumber = getRandomNumber(1, 30);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = findGcd(firstNumber, secondNumber);
  return [question, rightAnswer];
};

export default () => runGame(rules, getDataForRound);
