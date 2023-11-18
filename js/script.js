"use strict";

const title = document.getElementsByTagName("h1")[0];
const buttonPlus = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");

const inputRange = document.querySelector(".rollback input[type = 'range']");
const inputRangeValue = document.querySelector(".rollback span[class ='range-value']");

const startBtn = document.getElementsByClassName("handler_btn").start;
const resetBtn = document.getElementsByClassName("handler_btn").reset;

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screenCount: 0,
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  isError: false,
  init: function () {
    appData.addTitle();
    startBtn.addEventListener("click", appData.start);
    buttonPlus.addEventListener("click", appData.addScreenBlock);
    appData.getServicePercentPrices();
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    if (appData.addScreens()) {
      appData.addServices();
      appData.addPrices();
      appData.showResult();
    }
    // console.log(appData);
    // appData.logger();
  },
  showResult: function () {
    total.value = appData.screenPrice;
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
    totalCount.value = appData.screenCount;
  },
  addScreens: function () {
    screens = document.querySelectorAll(".screen");
    appData.isError = false;
    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;
      appData.screens.push({
        id: index,
        name: selectName,
        count: +input.value,
        price: +select.value * +input.value,
      });
      if (select.options[select.selectedIndex].value === "" || +input.value === 0) {
        appData.isError = true;
        console.log("не заполнены все поля экранов");
      }
    });
    return !appData.isError;
  },
  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });
    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens = document.querySelectorAll(".screen");
    screens[screens.length - 1].after(cloneScreen);
  },
  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
      appData.screenCount += +screen.count;
    }
    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }
    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
    }
    appData.fullPrice =
      +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
    appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },
  getServicePercentPrices: function () {
    inputRange.value = appData.rollback;
    inputRangeValue.textContent = appData.rollback + "%";
    inputRange.addEventListener("input", function (event) {
      appData.rollback = event.target.value;
      inputRangeValue.textContent = appData.rollback + "%";
    });
  },
  logger: function () {
    console.log("Стоимость разработки сайта: ", appData.fullPrice);
    console.log("Стоимость-откат посреднику: ", appData.servicePercentPrice);
    console.log("Типы экранов: ", appData.screens);
  },
};

appData.init();
