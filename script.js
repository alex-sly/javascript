"use strict";

// let title;
// let screens;
// let screenPrice;
// let adaptive;
// let rollback = 10;
// let allServicePrices;
// let fullPrice;
// let servicePercentPrice;
// let service1;
// let service2;

const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: '',
  service2: '',
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!appData.isNumber(appData.screenPrice));
    appData.screenPrice = +appData.screenPrice;

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  getAllServicePrices: function () {
    let sum = 0;
    let servicePrice;
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "Метрика");
      } else {
        appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "Отправка форм");
      }

      do {
        servicePrice = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(servicePrice));
      sum += +servicePrice;
    }
    return sum;
  },
  getFullPrice: function () {
    return appData.screenPrice + appData.allServicePrices;
  },
  getServicePercentPrices: function () {
    return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },
  getTitle: function () {
    return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
  },
  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что то пошло не так";
    }
  },
  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.title = appData.getTitle();
    appData.logger();
  },
  logger: function () {
    for (let key in appData) {
      console.log(key + ': ' + appData[key]);
    }
  }
};

appData.start();

// console.log("Стоимость верстки экранов:  ", appData.screenPrice);
// console.log("allServicePrices: ", appData.allServicePrices);
// console.log(appData.getRollbackMessage(appData.fullPrice));

// console.log("Стоимость разработки сайта: ", appData.fullPrice);
// console.log("Стоимость-откат посреднику: ", appData.servicePercentPrice);
