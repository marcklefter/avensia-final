import { useState } from 'react';

// in this example, JavaScript closures is demonstrated.
export function App() {
  const [count, setCount] = useState(0);

  const log = () => {
    setTimeout(() => {
      console.log('Count: ' + count);
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