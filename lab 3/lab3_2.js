'use strict';

const generateKey = (length, characters) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    result += characters[index];
  }
  return result;
};

const characters = 'bnxkjuw37280pdocxijhn2jcxo2';
const key = generateKey(17, characters);
console.log(key);