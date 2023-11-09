"use strict";

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};
function inputNum(vopros) {
  let num = prompt(vopros);
  if (num === null) {
    num = 0;
  } else if (isNumber(num)) {
    num = +num;
  } else {
    num = inputNum("Введи число!");
  }
  return num;
}
function start(x) {
  console.log(x);
  function step() {
    let num = inputNum("Угадай число от 1 до 100");
    console.log(num);
    if (num === 0) {
      alert("Игра окончена");
    } else if (num > x) {
      alert("Загаданное число меньше");
      step();
    } else if (num < x) {
      alert("Загаданное число больше");
      step();
    } else {
      alert("Поздравляю, Вы угадали!!!");
    }
  }
  step();
}

start(Math.trunc(Math.random() * 100) + 1);
