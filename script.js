"use strict";

let title = "JavaScript"; // строка с названием проекта
let screens = "Простые, Сложные, Интерактивные"; // строка с названиями типов экранов через запятую
let screenPrice = 1000; // любое число
let rollback = 20; // любое число от 1 до 100
let fullPrice = 5000; // любое число (сколько хотите заработать)
let adaptive = true; // булевое значение

// Вывести в консоль тип данных значений переменных title, fullPrice, adaptive
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
// Вывести в консоль длину строки из переменной screens
console.log(screens.length);
// Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(screens.toLowerCase().split(", "));
// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
console.log(fullPrice * (rollback / 100));

title = prompt("Как называется ваш проект?");
screens = prompt("Какие типы экранов нужно разработать?");
screenPrice = parseInt(prompt("Сколько будет стоить данная работа?"));
adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = parseInt(prompt("Сколько это будет стоить?"));
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = parseInt(prompt("Сколько это будет стоить?"));
// Вычислить итоговую стоимость (screenPrice + servicePrice1 + servicePrice2)
fullPrice = screenPrice + servicePrice1 + servicePrice2;
// Объявить переменную servicePercentPrice и занести в нее итоговую стоимость (servicePercentPrice = fullPrice - Откат посреднику)
let servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));

console.log("Название проекта: ", title);
console.log("Стоимость проекта: ", fullPrice);
console.log("Адаптив: ", adaptive);
console.log("Типвы экранов: ", screens);
console.log("Стоимость верстки экранов: ", screenPrice, " рублей");
console.log("Доп.услуги: ", servicePrice1, ", ", servicePrice2);
console.log("Процент отката посреднику: ", fullPrice * (rollback / 100));
console.log("Итоговый доход: ", servicePercentPrice);

// Написать конструкцию условий (расчеты приведены в рублях) (вывести в консоль)
// - Если fullPrice больше 30000, то “Даем скидку в 10%”
// - Если fullPrice больше 15000 и меньше 30000, то сообщение “Даем скидку в 5%”
// - Если fullPrice меньше 15000 и больше 0 то в консоль вывести сообщение “Скидка не предусмотрена”
// - Если отрицательное значение то вывести “Что то пошло не так”
// - Учесть варианты 0, 15000 и 30000(к какому уровню не важно)
switch (true) {
  case fullPrice > 30000:
    console.log("Даем скидку в 10%");
    break;
  case fullPrice > 15000 && fullPrice <= 30000:
    console.log("Даем скидку в 5%");
    break;
  case fullPrice > 0 && fullPrice <= 15000:
    console.log("Скидка не предусмотрена");
    break;
  default:
    console.log("Что то пошло не так");
}
