import React, { useEffect, useState } from 'react'

const DigitalClock = () => {

const [clockState, setClockState] = useState();  

useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="clockDiv">
    <h3>Hora:</h3>
    <span className='clock'>{clockState}</span>
  </div>
  )
}

export default DigitalClock