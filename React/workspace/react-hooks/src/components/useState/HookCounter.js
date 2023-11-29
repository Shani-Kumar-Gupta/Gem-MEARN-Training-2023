import React, { useState } from 'react';
const HookCounter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="hook__counter__container">
      <h1>useState Hook COUNTER: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement Counter</button>
    </div>
  )
};

export default HookCounter;