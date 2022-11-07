import React from 'react'
import { useEffect, useState } from 'react';


const DigitalClock = () => {
    const [clockState, setclockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setclockState(date.toLocaleTimeString());
        },1000);

        },[]);
  return (
    <div className="digital-clock">
<h2>{clockState}</h2>
    </div>
  );
};

export default DigitalClock;