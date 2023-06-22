#!/usr/bin/env node
function getRandomArrayElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
export default getRandomArrayElement;
