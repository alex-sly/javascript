const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);
    if (timeRemaining < 0) {
      hours = 0;
      minutes = 0;
      seconds = 0;
    }
    return { timeRemaining, days, hours, minutes, seconds };
  };

  const zero = (num) => {
    return num > 9 ? num : "0" + num;
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();
    timerHours.textContent = zero(getTime.hours);
    timerMinutes.textContent = zero(getTime.minutes);
    timerSeconds.textContent = zero(getTime.seconds);
    if (getTime.timeRemaining <= 0) {
      clearInterval(runTimer);
    }
  };

  const runTimer = setInterval(updateClock, 1000);
};
export default timer;
