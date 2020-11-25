import React, { useEffect, useState } from "react";

const Clock = () => {
  const [currentTime, setCurrentTIme] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTIme(new Date()), 100);
    return function cleanUp() {
      clearInterval(timer);
    };
  });

  const weeks = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
  const day = weeks[currentTime.getDay()];
  const date = currentTime.getDate();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  return (
    <div>
      <p>{`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`}</p>
      <p>{`${day}day ${date}`}</p>
    </div>
  );
};

export default Clock;
