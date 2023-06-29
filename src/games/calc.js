#!/usr/bin/env node
import gameLogic from '../index.js';
import getRandomNumber from '../getRandomInt.js';
import getRandomArrayElement from '../getRandomArrayElement.js';

const RunCalc = () => {
  const rules = 'What is the result of the expression?';

  const taskCalc = () => {
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
  gameLogic(rules, taskCalc);
};
export default RunCalc;
