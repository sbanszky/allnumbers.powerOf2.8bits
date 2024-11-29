import React, { useState, useEffect, useCallback } from 'react';
import PowersDisplay from './PowersDisplay';

export default function PowersAnimation() {
  const [currentPower, setCurrentPower] = useState(0);
  const [result, setResult] = useState('1');
  const [isPlaying, setIsPlaying] = useState(false);
  const maxPower = 32;

  const calculateResult = useCallback((power: number) => {
    return BigInt(2 ** power).toLocaleString();
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && currentPower < maxPower) {
      timer = setTimeout(() => {
        setCurrentPower(prev => {
          const nextPower = prev + 1;
          setResult(calculateResult(nextPower));
          return nextPower;
        });
      }, 1000);
    } else if (currentPower >= maxPower) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [currentPower, isPlaying, maxPower, calculateResult]);

  const handlePrevious = () => {
    if (currentPower > 0) {
      const newPower = currentPower - 1;
      setCurrentPower(newPower);
      setResult(calculateResult(newPower));
    }
  };

  const handleNext = () => {
    if (currentPower < maxPower) {
      const newPower = currentPower + 1;
      setCurrentPower(newPower);
      setResult(calculateResult(newPower));
    }
  };

  const handlePlayPause = () => {
    if (currentPower >= maxPower) {
      setCurrentPower(0);
      setResult(calculateResult(0));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <PowersDisplay
      currentPower={currentPower}
      result={result}
      isPlaying={isPlaying}
      onPrevious={handlePrevious}
      onNext={handleNext}
      onPlayPause={handlePlayPause}
      progress={(currentPower / maxPower) * 100}
    />
  );
}