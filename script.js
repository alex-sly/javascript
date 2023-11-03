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
