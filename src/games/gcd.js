#!/usr/bin/env node
import gameLogic from '../index.js';
import getRandomNumber from '../getRandomInt.js';

const gsd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const taskGsd = () => {
    const firstRandomNumber = getRandomNumber();
    const secondRandomNumber = getRandomNumber();

    const question = `${firstRandomNumber} ${secondRandomNumber}`;
    let x = firstRandomNumber;
    let y = secondRandomNumber;
    while (y !== 0) {
      const temp = y;
      y = x % y;
      x = temp;
    }
    return [question, String(x)];
  };
  gameLogic(rules, taskGsd);
};
export default gsd;
