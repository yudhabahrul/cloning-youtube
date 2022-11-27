import { useState, useEffect } from "react";

const getWindowsSize = (): number => {
  const { innerWidth } = window;
  return innerWidth;
};

export const UseWindow = () => {
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    setWindowSize(getWindowsSize());
  }, [windowSize, getWindowsSize]);

  return [windowSize, setWindowSize];
};
