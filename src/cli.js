import readlineSync from 'readline-sync';

export const cli = () => {
  console.log('Welcome to the Brain Games!');
  const inputName = readlineSync.question('May I have your name? ');
  console.log('Hello,', inputName);
  return inputName;
};

export default cli();
