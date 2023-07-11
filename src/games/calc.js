import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const calcExpresion = (firstNum, sign, secondNum) => {
  let result = '';
  switch (sign) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    default:
      result = null;
  }
  return String(result);
};
const rule = 'What is the result of the expression?';

const getDataForRound = () => {
  const firstNum = getRandomNumber(1, 15);
  const secondNum = getRandomNumber(1, 15);
  const signs = ['+', '-', '*'];
  const sign = signs[getRandomNumber(0, 2)];
  const question = `${firstNum} ${sign} ${secondNum}`;
  const rightAnswer = calcExpresion(firstNum, sign, secondNum);
  return [question, rightAnswer];
};
export default () => runGame(rule, getDataForRound);
