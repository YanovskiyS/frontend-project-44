import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const findGcd = () => {
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

const runGsd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  runGame(rules, findGcd);
};
export default runGsd;
