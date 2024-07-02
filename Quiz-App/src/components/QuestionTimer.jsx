import { useEffect, useState } from "react";

export default function QuestionTimer({ timeoutValue, onTimeOutFn }) {
  const [remainingTime, setRemainingTime] = useState(timeoutValue);

  useEffect(()=>{

      setTimeout(onTimeOutFn, timeoutValue);
  },[timeoutValue, onTimeOutFn])

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return (
    <div>
      <progress id="question-time" max={timeoutValue} value={remainingTime} /> <span>timer: 10 sec for each</span>
    </div>
  );
}
