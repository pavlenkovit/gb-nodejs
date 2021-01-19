/*
2) Создать простейшую консольную программу с использованием хотя
бы одной функции из стороннего модуля, локально установленного
с помощью NPM (модуль должен отличаться от рассмотренного на
уроке!).
*/

const _ = require('lodash');

const array = [2, 3, 5, 1, 4];
const min =_.min(array);
console.log(min); // 1


/*
3) Продвинутый блок: создать с помощью Node.js API консольную
программу, которая будет выводить что-либо в консоль разными
цветами и издавать звук(и) с помощью модуля или модулей,
отличных от рассмотренного на уроке
*/

const minimist = require('minimist'); // модуль для преобразования строки аргументов в объект
const colors = require('colors');
const beepbeep = require('beepbeep');

const { color, message, beep } = minimist(process.argv);
console.log(message[color]);
beepbeep(beep);

// пример запуска из консоли:
// node index --color "green" --message "text" --beep 4
