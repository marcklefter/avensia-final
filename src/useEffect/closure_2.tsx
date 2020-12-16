import { useState, useRef } from 'react';

// yhis example shows how to write the current count to a reference, in order to read it at a later point in time.
export function App() {
  const [count, setCount] = useState(0);

  // create a reference that will store the current value of count.
  //
  // Note: The call to useRef only creates the reference once; upon every subsequent render, the same reference
  // is returned.
  const currentCount = useRef<number>();

  // store the current value of count.
  currentCount.current = count; // currentCount = { current: 0 }

  const log = () => {
    setTimeout(() => {
      // read the current value of count.
      //
      // NOTE: Compare with capturing count in closure_1.
      console.log('Count: ' + currentCount.current);
    }, 3000);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={log}>Log</button>
    </>
  );
}