/*
1) Написать консольную игру "Орел или решка", в которой надо будет
угадывать выпадающее число (1 или 2). В качестве аргумента
программа может принимать имя файла для логирования
результатов каждой партии
*/

const fs = require('fs');
const readline = require('readline');
const minimist = require('minimist');

const { log } = minimist(process.argv);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const logger = fs.createWriteStream(log, { flags: 'a' });

rl.question('Введите число (1 или 2) ', n => {
  spinCoin(() => {
    const result = Math.ceil(Math.random() * 2);
    let message;
    if (result === +n) {
      message = `Вы победили! Правильный ответ ${result}`;
      logger.write('\nwin');
    } else {
      message = `Вы проиграли! Вы загадали ${n}, а правильный ответ – ${result}`;
      logger.write('\nlose');
    }

    console.log(message);
  });
});

function spinCoin(callback) {
  let x = 0;
  const arr = ['\\', '|', '/', '-'];
  const interval = setInterval(() => {
    process.stdout.write(`\r${arr[x++]}`);
    x &= 3;
  }, 50);

  setTimeout(() => {
    clearInterval(interval);
    process.stdout.write('\r');
    callback();
  }, 1000);
}
