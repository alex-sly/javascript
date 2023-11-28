const two = () => {
  const newYear = new Date("01 january 2024").getTime();
  const dateNow = new Date().getTime();
  const days = Math.floor((newYear - dateNow) / 1000 / 60 / 60 / 24);
  const date = new Date();
  const dayN = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const daysOfWeek = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];
  const zero = (num) => (num > 9 ? num : "0" + num);

  if (hours >= 0 && hours < 6) {
    console.log("Доброй ночи!");
  } else if (hours >= 6 && hours < 12) {
    console.log("Доброе утро!");
  } else if (hours >= 12 && hours < 18) {
    console.log("Добрый день!");
  } else {
    console.log("Добрый вечер!");
  }
  console.log("Сегодня:", daysOfWeek[dayN]);
  if (hours > 12) {
    console.log("Текущее время:", `${zero(hours - 12)}:${zero(minutes)}:${zero(seconds)}`, "PM");
  } else {
    console.log("Текущее время:", `${zero(hours)}:${zero(minutes)}:${zero(seconds)}`, "AM");
  }
  console.log("До нового года осталось", days, "дней");
};
export default two;
