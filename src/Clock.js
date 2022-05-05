import { useState } from 'react';


function Clock() {

  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  // function to make the time update every every-time it changes
  function updateTime() {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }

  // we need to set the interval so then it will automatically change the time it self after a certain amount of time.
  setInterval(updateTime, 1000);

  return (
    <div className="clock">
      <h2>Digital clock</h2>
      <h1>{currentTime}</h1>
    </div>

  )

}

export default Clock