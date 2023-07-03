import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const calculation = () => {
  const firstRandomNumber = getRandomNumber(1, 10);
  const secondRandomNumber = getRandomNumber(1, 10);

  const signs = ['+', '-', '*'];
  const sign = signs[getRandomNumber(0, 2)];

  const question = `${firstRandomNumber} ${sign} ${secondRandomNumber}`;
  let result = '';
  switch (sign) {
    case '+':
      result = firstRandomNumber + secondRandomNumber;
      break;
    case '-':
      result = firstRandomNumber - secondRandomNumber;
      break;
    case '*':
      result = firstRandomNumber * secondRandomNumber;
      break;
    default:
      result = null;
  }

  return [question, String(result)];
};

const runCalc = () => {
  const rules = 'What is the result of the expression?';

  runGame(rules, calculation);
};
export default runCalc;
