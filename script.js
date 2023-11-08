"use strict";

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));
  screenPrice = +screenPrice;

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;
  let servicePrice;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?", "Метрика");
    } else {
      service2 = prompt("Какой дополнительный тип услуги нужен?", "Отправка форм");
    }

    do {
      servicePrice = prompt("Сколько это будет стоить?");
    } while (!isNumber(servicePrice));
    sum += +servicePrice;
  }
  return sum;
};

const showTipeOf = function (variable) {
  console.log(variable, typeof variable);
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

// Итоговая стоимость - откат посреднику
const getServicePercentPrices = function () {
  return fullPrice - fullPrice * (rollback / 100);
};

const getTitle = function () {
  return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTipeOf(title);
showTipeOf(screenPrice);
showTipeOf(adaptive);

console.log("allServicePrices: ", allServicePrices);

console.log(getRollbackMessage(fullPrice));
// console.log(typeof title);
// console.log(typeof screenPrice);
// console.log(typeof adaptive);
// console.log(screens.length);
console.log("Стоимость-откат посреднику: ", servicePercentPrice);
console.log("Стоимость верстки экранов:  ", screenPrice);
console.log("Стоимость разработки сайта: ", fullPrice);
