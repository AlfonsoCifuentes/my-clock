import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    let thisYear = new Date().getFullYear();
    
    let countDownDate = new Date(`Jun 21, ${thisYear} 00:00:00`).getTime();

    let interval = setInterval(() => {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

        if (distance < 0) {
            clearInterval(interval);
            setTime("⛱🌞¡EMPIEZA EL VERANO!😎☀");
        }

    }, 1000)
  }, []);

  return ( <div className="clockDiv">
  <h3>Tiempo restante hasta el verano:</h3>
  <span className="clock"> {time}</span>
  </div>
  )
};

export default Countdown;
