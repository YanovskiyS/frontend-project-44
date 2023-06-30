#!/usr/bin/env node
import runGame from '../index.js';
import getRandomNumber from '../getRandomInt.js';

const runIsEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

  const taskEven = () => {
    const randomNumber = getRandomNumber(1, 10);
    let answer;
    if (randomNumber % 2 === 0) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
    return [randomNumber, answer];
  };
  runGame(rule, taskEven);
};
export default runIsEven;
