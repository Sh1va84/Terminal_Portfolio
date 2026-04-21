import { useState, useEffect } from 'react';

const useTypewriter = (text: string, speed = 18) => {
  const [output, setOutput] = useState('');

  useEffect(() => {
    setOutput('');
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setOutput(text.slice(0, ++i));
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text]);

  return { output, isDone: output.length === text.length && text.length > 0 };
};

export default useTypewriter;
