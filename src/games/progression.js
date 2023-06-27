#!/usr/bin/env node
import gameLogic from '../index.js';
import getRandomNumber from '../getRandomInt.js';

const prog = () => {
  const rules = 'What number is missing in the progression?';

  const taskProgression = () => {
    const firstElement = getRandomNumber() + 1;
    const step = getRandomNumber() + 1;
    const progression = [];
    for (let i = firstElement; progression.length <= 10; i += step) {
      progression.push(i);
    }
    const answer = progression.splice(getRandomNumber(), 1, '..');
    return [(progression.join(' ')), String(answer)];
  };
  gameLogic(rules, taskProgression);
};
export default prog;
