import React, { useEffect, useState } from 'react';

const Timer = ({ initialHours = 0, initialMinutes = 0, initialSeconds = 59 }) => {
  const [sec, setSec] = useState(initialSeconds);
  const [min, setMin] = useState(initialMinutes);
  const [hour, setHour] = useState(initialHours);

  useEffect(() => {
    const id = setInterval(() => {
      if (sec > 0) {
        setSec(sec - 1);
      } else if (min > 0) {
        setSec(59);
        setMin(min - 1);
      } else if (hour > 0) {
        setSec(59);
        setMin(59);
        setHour(hour - 1);
      } else {
        clearInterval(id); 
      }
    }, 1000);

    return () => clearInterval(id);
  }, [sec, min, hour]);

  return (
    <div>
       <h1>{min}:{sec}</h1>
    </div>
  )
}

export default Timer
