import { useState, useEffect} from 'react';

const Countdown = () => {
  // state to store time in seconds
  const [ time, setTime ] = useState(10);

  // state when run out of time
  const [ timeUp, setTimeUp ] = useState(false);

  // countdown starts as time changes, stops when time = 0
  useEffect(() => {
    const countdown = 
      time >= 0 && setTimeout(() => setTime(time - 1), 1000);
    if (time < 0) {
      clearInterval(countdown);
      setTimeUp(true);
    }
  },[time]);

  return (
    <div>
      {timeUp
        ? <p>Time is up!</p>
        : <p>{time.toString()} seconds left</p>
      }
    </div>
  );
};

export default Countdown;
