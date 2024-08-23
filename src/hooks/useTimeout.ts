import { useEffect, useState } from 'react';
type useTimeoutProps = { duration?: number };

const useTimeout = ({ duration = 3000 }: useTimeoutProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [isVisible, duration]);

  return { isVisible };
};

export default useTimeout;
