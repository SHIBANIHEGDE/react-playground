import { useState,  useEffect } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<number | null>(null);
  const [intervalId, setIntervalId]  = useState<number | null>(null);

  const elapsedTime = startTime && currentTime ? currentTime - startTime : 0;

  const totalSeconds = Math.floor(elapsedTime / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);

  const displayHours = totalHours;
  const displayMinutes = totalMinutes % 60;
  const displaySeconds = totalSeconds % 60;

  const startTimer = () => {
    const now = Date.now();
    setStartTime(now);
    setCurrentTime(now);
    
    setIntervalId ( setInterval(() => {
      setCurrentTime(Date.now());
    }, 10));
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const resetTimer = () => {
    setStartTime(null);
    setCurrentTime(null);
    if (intervalId) {
      clearInterval(intervalId);
     setIntervalId(null);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-card">
        <h1 className="stopwatch-title">Stopwatch</h1>
        
        <div className="stopwatch-display">
          {String(displayHours).padStart(2, '0')}:
          {String(displayMinutes).padStart(2, '0')}:
          {String(displaySeconds).padStart(2, '0')}
        </div>
        
        <div className="stopwatch-controls">
          <button 
            onClick={startTimer}
            disabled={intervalId !== null}
            className="stopwatch-btn btn-start"
          >
            Start
          </button>
          
          <button 
            onClick={stopTimer}
            disabled={intervalId === null}
            className="stopwatch-btn btn-stop"
          >
            Stop
          </button>
          
          <button 
            onClick={resetTimer}
            className="stopwatch-btn btn-reset"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;