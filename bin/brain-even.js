#!/usr/bin/env node

import readlineSync from 'readline-sync';
import sayHelloAndGiveName from '../src/cli.js';

const userName = sayHelloAndGiveName;
const roundCount = 3;
const maxNumber = 100;

const getRandomInt = (max) => Math.floor(Math.random() * max);

const isEven = (num) => num % 2 === 0;

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const brainIsEven = (counter, maxNum) => {
  let win = true;
  for (let i = 0; i < counter; i += 1) {
    const random = getRandomInt(maxNum);
    console.log('Question: ', random);
    const answer = readlineSync.question('Your answer: ');
    if (
      (isEven(random) && answer === 'yes')
      || (!isEven(random) && answer === 'no')
    ) {
      console.log('Correct!');
    } else {
      win = false;
      if (isEven) {
        console.log(
          answer,
          " is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ",
          userName,
        );
        break;
      }
      console.log(
        answer,
        " is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ",
        userName,
        '!',
      );
      break;
    }
  }
  if (win) {
    console.log('Congratulations,', userName, '!');
  }
};
brainIsEven(roundCount, maxNumber);
