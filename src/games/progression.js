#!/usr/bin/env node
import runGame from '../index.js';
import getRandomNumber from '../getRandomInt.js';

const runProgression = () => {
  const rules = 'What number is missing in the progression?';

  const taskProgression = () => {
    const firstElement = getRandomNumber(1, 10);
    const step = getRandomNumber(1, 10);
    const progression = [];
    for (let i = firstElement; progression.length <= 10; i += step) {
      progression.push(i);
    }
    const answer = progression.splice(getRandomNumber(1, 10), 1, '..');
    return [(progression.join(' ')), String(answer)];
  };
  runGame(rules, taskProgression);
};
export default runProgression;
