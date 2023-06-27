#!/usr/bin/env node
import gameLogic from '../index.js';
import getRandomNumber from '../getRandomInt.js';

const isEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

  const taskEven = () => {
    const randomNumber = getRandomNumber();
    let answer;
    if (randomNumber % 2 === 0) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
    return [randomNumber, answer];
  };
  gameLogic(rule, taskEven);
};
export default isEven;
