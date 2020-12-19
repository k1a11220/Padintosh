const time = document.querySelector(".time");
const days = document.querySelector(".day");

function clock() {
  const date = new Date();
  const weeks = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
  const day = weeks[date.getDay()];
  const dates = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  time.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
  days.innerText = `${day + "day"} ${dates}`;
}

clock();
setInterval(clock, 1000);
