"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 10;
// Вычислим итоговую стоимость
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
// Итоговая стоимость - откат посреднику
let servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));

const showTipeOf = function (variable) {
  console.log(variable, typeof variable);
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

// 1) Объявить функцию getAllServicePrices
const getAllServicePrices = function (price1, price2) {
  return price1 + price2;
};
let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

// 2) Объявить функцию getFullPrice
function getFullPrice(price1, price2) {
  return price1 + price2;
}
fullPrice = getFullPrice(screenPrice, allServicePrices);

// 3) Объявить функцию getTitle
const getTitle = function (title) {
  let str = title.trim().toLowerCase();
  str = str[0].toUpperCase() + str.slice(1);
  return str;
};
title = getTitle(title);

// 4) Объявить функцию getServicePercentPrices
const getServicePercentPrices = function (price1, price2) {
  return price1 - price2;
};
servicePercentPrice = getServicePercentPrices(fullPrice, fullPrice * (rollback / 100));

// 5) Почистить консоль логи и добавить недостающие, должны остаться:
// - вызовы функции showTypeOf
// - вывод строки с типами экранов для разработки screens
// - сообщение о скидке пользователю (вызовы функции getRollbackMessage)
// - стоимость за вычетом процента отката посреднику (вызовы функции getServicePercentPrices)

showTipeOf(title);
showTipeOf(screenPrice);
showTipeOf(adaptive);

console.log("Типы экранов: ", screens);
console.log("Скидка пользователю:", getRollbackMessage(fullPrice));
console.log("Стоимость за вычетом процента отката посреднику: ", servicePercentPrice);
