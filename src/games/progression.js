import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const createRandomProgression = (firstElement, step) => {
  const progression = [];
  for (let i = firstElement; progression.length <= 10; i += step) {
    progression.push(i);
  }
  return progression;
};

const getDataForRound = () => {
  const firstElement = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progression = createRandomProgression(firstElement, step);
  const answer = progression.splice(getRandomNumber(1, 10), 1, '..');
  return [(progression.join(' ')), String(answer)];
};

const rules = 'What number is missing in the progression?';

export default () => runGame(rules, getDataForRound);
