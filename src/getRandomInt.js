const getRandomNumber = (min, max) => {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};
export default getRandomNumber;
