import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'What is the result of the expression?';

// eslint-disable-next-line consistent-return
const calcExpresion = (firstNum, sign, secondNum) => {
  switch (sign) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      break;
  }
};

const getDataForRound = () => {
  const firstNum = getRandomNumber(1, 15);
  const secondNum = getRandomNumber(1, 15);
  const signs = ['+', '-', '*'];
  const sign = signs[getRandomNumber(0, 2)];
  const question = `${firstNum} ${sign} ${secondNum}`;
  const rightAnswer = String(calcExpresion(firstNum, sign, secondNum));
  return [question, rightAnswer];
};
export default () => runGame(rule, getDataForRound);
