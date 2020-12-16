import { useState, useEffect } from 'react';

// this examples solves the problem in setInterval_1 by calling setCount with a callback.
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handle = setInterval(() => {
      // use the callback version of setCount; the callback returns a new count based on the previous count 
      // that is passed to it.
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(handle);
  }, []);
  // empty dependency array because the effect does not depend on the count variable any more.
  // The timer is therefore only created once.

  return <>`Count: ${count}`</>
}

export function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(true)}>Show Counter</button>
      <button onClick={() => setShow(false)}>Hide Counter</button>
      {show && <Counter />}
    </>
  )
}