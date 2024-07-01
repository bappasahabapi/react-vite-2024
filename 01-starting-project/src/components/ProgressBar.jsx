import { useEffect, useState } from "react";

export default function ProgressBar({timer}) {
  const [remainingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((preTime) => preTime - 10);
    }, 10);

    // cleanup
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    
      <progress value={remainingTime} max={timer} />
    
  );
}
