#!/usr/bin/env node
import runGame from '../index.js';
import getRandomNumber from '../getRandomInt.js';

const RunCalc = () => {
  const rules = 'What is the result of the expression?';

  const taskCalc = () => {
    const firstRandomNumber = getRandomNumber(1, 10);
    const secondRandomNumber = getRandomNumber(1, 10);

    const signs = ['+', '-', '*'];
    const sign = signs[getRandomNumber(0, 2)];

    const question = `${firstRandomNumber} ${sign} ${secondRandomNumber}`;
    const calculation = () => {
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
      return result;
    };

    return [question, String(calculation())];
  };
  runGame(rules, taskCalc);
};
export default RunCalc;
