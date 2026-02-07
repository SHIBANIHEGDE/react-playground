import React, { useRef, useState } from 'react'
import "./Stopwatch.css";

const Stopwatch = () => {
    const [time, setTime] = useState(0); 
    const [isRunning, setIsRunning] = useState(false);
    const intervalId = useRef<number | null>(null);
  const  startTimer = ()=>{
    if(isRunning){
        console.warn('already started');
        return;
    }
    setIsRunning(true);
    const startTime = Date.now();
    intervalId.current = setInterval(()=>{
        const timeElapsed = Date.now() - startTime;
        setTime(timeElapsed)
    }, 1000)


  }
  return (

    <> 
    <div className="time-display-panel">
        <div>1</div>
        <div>2</div>
        :
        <div>1</div>
        <div>2</div>

    </div>
    <div className="buttons-panel margin-top-20">
    <button onClick={startTimer}>Start</button>
     <button>Stop</button>
     <button>Reset</button>
     </div>
     </>
   
  )
}

export default Stopwatch