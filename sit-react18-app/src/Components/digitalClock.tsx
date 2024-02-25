import React, { useState, useEffect } from "react";

const DigitalClock = (): JSX.Element => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default DigitalClock;

import React, { useRef } from 'react';

function MyComponent() {
    const inputRef = useRef(null);

    function focusInput() {
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}

