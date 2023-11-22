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
    const newStart = this.start.bind(this);
    const newReset = this.reset.bind(this);
    this.addTitle();
    startBtn.addEventListener("click", newStart);
    resetBtn.addEventListener("click", newReset);
    buttonPlus.addEventListener("click", this.addScreenBlock);
    this.getServicePercentPrices();
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    if (this.addScreens()) {
      this.addServices();
      this.addPrices();
      this.showResult();
    }
    // this.logger();
    // console.log(this);
  },
  reset: function () {
    this.screenCount = 0;
    this.screenPrice = 0;
    this.rollback = 10;
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    this.fullPrice = 0;
    this.servicePercentPrice = 0;
    this.servicesPercent = {};
    this.servicesNumber = {};
    this.isError = false;
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      check.checked = false;
    });
    this.showResult();
    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      if (index === 0) {
        select.disabled = false;
        input.disabled = false;
        select.selectedIndex = 0;
        input.value = "";
      } else {
        screens[index].remove();
      }
    });
    this.screens = [];
    inputRange.value = this.rollback;
    inputRangeValue.textContent = this.rollback + "%";
    startBtn.style.display = "";
    resetBtn.style.display = "none";
  },
  showResult: function () {
    total.value = this.screenPrice;
    totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
    totalCount.value = this.screenCount;
    screens.forEach((screen) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      select.disabled = true;
      input.disabled = true;
    });
    startBtn.style.display = "none";
    resetBtn.style.display = "";
  },
  addScreens: function () {
    screens = document.querySelectorAll(".screen");
    this.isError = false;
    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;
      this.screens.push({
        id: index,
        name: selectName,
        count: +input.value,
        price: +select.value * +input.value,
      });
      if (select.options[select.selectedIndex].value === "" || +input.value === 0) {
        this.isError = true;
        console.log("не заполнены все поля экранов");
      }
    });
    return !this.isError;
  },
  addServices: function () {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });
    otherItemsNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens = document.querySelectorAll(".screen");
    screens[screens.length - 1].after(cloneScreen);
  },
  addPrices: function () {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
      this.screenCount += +screen.count;
    }
    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }
    for (let key in this.servicesPercent) {
      this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
    }
    this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;
    this.servicePercentPrice = this.fullPrice - this.fullPrice * (this.rollback / 100);
  },
  getServicePercentPrices: function () {
    inputRange.value = this.rollback;
    inputRangeValue.textContent = this.rollback + "%";
    inputRange.addEventListener("input", (event) => {
      this.rollback = event.target.value;
      inputRangeValue.textContent = this.rollback + "%";
    });
  },
  logger: function () {
    console.log("Стоимость разработки сайта: ", this.fullPrice);
    console.log("Стоимость-откат посреднику: ", this.servicePercentPrice);
    console.log("Типы экранов: ", this.screens);
  },
};

appData.init();
