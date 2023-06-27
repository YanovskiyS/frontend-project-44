#!/usr/bin/env node
import gameLogic from '../index.js';
import getRandomNumber from '../getRandomInt.js';
import getRandomArrayElement from '../getRandomArrayElement.js';

const calc = () => {
  const rules = 'What is the result of the expression?';

  const taskCalc = () => {
    const firstRandomNumber = getRandomNumber();
    const secondRandomNumber = getRandomNumber();

    const signs = ['+', '-', '*'];
    const sign = getRandomArrayElement(signs);

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
export default calc;
