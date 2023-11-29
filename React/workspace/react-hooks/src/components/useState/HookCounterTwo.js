import React, { useState } from 'react'

function HookCounterTwo() {
  const initialCount = 0;
  const [counter, setCounter] = useState(initialCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      // setCounter(counter + 1);
      setCounter(prevCounter => prevCounter + 1);
    }
  }
  return (
    <div>
      Count: {counter}
      <button onClick={() => setCounter(initialCount)}>Reset</button>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Safe Increment</button>
      <button onClick={() => setCounter(prevCounter => prevCounter - 1)}>Safe Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo