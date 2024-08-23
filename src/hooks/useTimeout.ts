import { useEffect, useState } from 'react';
type useTimeoutProps = { duration?: number; resetAfter?: number };

const useTimeout = ({ duration = 3000, resetAfter }: useTimeoutProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    } else if (resetAfter && !isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, resetAfter);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, resetAfter]);

  return { isVisible };
};

export default useTimeout;
