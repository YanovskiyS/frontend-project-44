import runGame from '../index.js';
import getRandomNumber from '../utils.js';

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

const runProgression = () => {
  const rules = 'What number is missing in the progression?';

  runGame(rules, taskProgression);
};
export default runProgression;
