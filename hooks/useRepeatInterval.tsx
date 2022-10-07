import { useEffect, useState } from "react";

export const useRepeatInterval = (maxNr: number, intervalRepeat: number) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => {
        if (count < maxNr) {
          return count + 1;
        } else {
          return 1;
        }
      });
    }, intervalRepeat);
    return () => clearInterval(interval);
  }, []);

  return count;
};
