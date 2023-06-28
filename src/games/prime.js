#!/usr/bin/env node
import gameLogic from '../index.js';
import getRandomNumber from '../getRandomInt.js';

const prime = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const taskPrime = () => {
    const question = getRandomNumber() + 1;
    let answer;
    if (question < 2) {
      answer = 'no';
    }
    for (let i = 2; i < question; i += 1) {
      if (question % i === 0) {
        answer = 'no';
        break;
      } else {
        answer = 'yes';
      }
    }
    return [question, answer];
  };
  gameLogic(rule, taskPrime);
};
export default prime;
