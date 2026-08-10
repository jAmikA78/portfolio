import { useCallback, useEffect, useState } from "react";

export function useCounter(target: number, duration = 2000, decimal = false) {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);

  const start = useCallback(() => setActive(true), []);

  useEffect(() => {
    if (!active) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(decimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [active, target, duration, decimal]);

  return { count, start };
}
