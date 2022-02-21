import React, { useState, useEffect } from "react";

const Chronometer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="clockDiv">
    <h3>Cronómetro</h3>
      <div className="chronometer">
        <span className="clock">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span className="clock">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span className="clock">{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div className="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)}>Iniciar</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>Parar</button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reiniciar</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)}>Reanudar</button>
        )}
      </div>
    </div>
  );
};

export default Chronometer;
