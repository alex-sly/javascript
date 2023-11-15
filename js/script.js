"use strict";

const adv = document.querySelector(".adv");
const body = document.getElementsByTagName("body");
const books = document.querySelectorAll(".book");
const book3 = books[4].querySelector("a");
const book2 = books[0].querySelectorAll("li");
const book5 = books[5].querySelectorAll("li");
const book6 = books[2].querySelectorAll("li");
const chapter8 = document.createElement("li");

books[0].before(books[1]);
books[3].before(books[4]);
books[5].after(books[2]);

body[0].style.backgroundImage = "url('./image/you-dont-know-js.jpg')";

book3.textContent = "Книга 3. this и Прототипы Объектов";

adv.remove();

book2[3].after(book2[6]);
book2[6].after(book2[8]);
book2[9].after(book2[2]);

book5[1].after(book5[9]);
book5[4].after(book5[2]);
book5[7].after(book5[5]);

chapter8.textContent = "Глава 8: За пределами ES6";
book6[8].after(chapter8);

// const title = document.getElementsByTagName("h1")[0];
// const btnStart = document.getElementsByClassName("handler_btn").start;
// const btnReset = document.getElementsByClassName("handler_btn").reset;
// const btnScreen = document.querySelector(".screen-btn");
// const itemsPercent = document.querySelectorAll(".other-items.percent");
// const itemsNumber = document.querySelectorAll(".other-items.number");
// const inputRange = document.querySelector(".rollback input[type = 'range']");
// const spanRange = document.querySelector(".rollback span[class ='range-value']");
// const totalInput = Array.from(document.getElementsByClassName("total-input"));
// let screens = document.querySelectorAll(".screen");

// console.log("title: ", title);
// console.log("btnStart: ", btnStart);
// console.log("btnReset: ", btnReset);
// console.log("btnScreen: ", btnScreen);
// console.log("itemsPercent: ", itemsPercent);
// console.log("itemsNumber: ", itemsNumber);
// console.log("inputRange: ", inputRange);
// console.log("spanRange: ", spanRange);
// console.log("totalInput: ", totalInput);
// console.log("screens: ", screens);

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();

    appData.logger();
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  asking: function () {
    let typeDef = ["Простые", "Сложные"];
    let serviceDef = ["Метрика", "Отправка форм"];
    do {
      appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    } while (appData.isNumber(appData.title));

    for (let i = 0; i < 2; i++) {
      let price = 0;
      let name = "";
      do {
        name = prompt("Какие типы экранов нужно разработать?", typeDef[i]);
      } while (appData.isNumber(name));
      do {
        price = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));
      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let price = 0;
      let name = "";
      do {
        name = prompt("Какой дополнительный тип услуги нужен?", serviceDef[i]);
      } while (appData.isNumber(name));
      do {
        price = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price));
      appData.services[name] = +price;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }
    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },
  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },
  getTitle: function () {
    appData.title =
      appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
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
  logger: function () {
    console.log("Стоимость разработки сайта: ", appData.fullPrice);
    console.log("Стоимость-откат посреднику: ", appData.servicePercentPrice);
    console.log("Типы экранов: ", appData.screens);
  },
};

// appData.start();
