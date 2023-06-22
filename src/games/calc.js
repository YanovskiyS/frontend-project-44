#!/usr/bin/env node
import salutation from '../index.js';
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

    let result = 0;
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

    return [question, result];
  };
  salutation(rules, taskCalc);
};
export default calc;
