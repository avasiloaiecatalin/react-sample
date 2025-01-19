import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { CodeBlock } from 'react-code-blocks';

export const UseEffectExample = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <>
      <p>Timer: {seconds} seconds</p>
      <div className='flex gap-2'>
        <Button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</Button>
        <Button onClick={resetTimer}>Reset</Button>
      </div>
      <CodeBlock
        text={`import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export const UseEffectExample = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div>
      <p>Timer: {seconds} seconds</p>
      <div className='flex gap-2'>
        <Button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</Button>
        <Button onClick={resetTimer}>Reset</Button>
      </div>
    </div>
  );
};
`}
        language={'jsx'}
        showLineNumbers={true}
      />
    </>
  );
};
