const getRandomNumber = (min, max) => {
  // eslint-disable-next-line no-param-reassign
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};
export default getRandomNumber;
