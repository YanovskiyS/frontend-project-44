#!/usr/bin/env node
import runGame from '../index.js';
import getRandomNumber from '../getRandomInt.js';

const runGsd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const taskGsd = () => {
    const firstRandomNumber = getRandomNumber(1, 30);
    const secondRandomNumber = getRandomNumber(1, 30);

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
  runGame(rules, taskGsd);
};
export default runGsd;
