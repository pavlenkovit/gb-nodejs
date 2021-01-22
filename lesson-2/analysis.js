/*
2) Сделать программу-анализатор игровых логов. В качестве
аргумента программа получает путь к файлу. Выведите игровую
статистику: общее количество партий, количество выигранных /
проигранных партий и их соотношение, максимальное число побед /
проигрышей подряд.
*/

const fs = require('fs');
const minimist = require('minimist');

const { log } = minimist(process.argv);

fs.readFile(log, 'utf8', (err, fileData) => {
  if (err) {
    return console.log(err);
  }
  const data = fileData.split('\n').slice(1);
  let wins = 0;
  let loses = 0;
  let maxWins = 0;
  let maxLoses = 0;

  let prevItem;
  data.forEach(item => {
    if (item === 'win') {
      wins++;
      if (!prevItem || prevItem === 'win') {
        maxWins++;
      }
    }
    if (item === 'lose') {
      loses++;
      if (!prevItem || prevItem === 'lose') {
        maxLoses++;
      }
    }
    prevItem = item;
  });
  console.log(data);
  console.log('Общее количество партий:', data.length);
  console.log('Выигранных партий:', wins);
  console.log('Проигранных партий:', loses);
  console.log(`Соотношение: ${wins}/${loses}`);
  console.log('Максимальное количество побед поряд:', maxWins);
  console.log('Максимальное количество поражений поряд:', maxLoses);
});
