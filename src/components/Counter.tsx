import { useState } from "react";

export default function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(c => c + step);
  const decrement = () => setCount(c => c - step);
  const reset = () => setCount(initialCount);

  return (
    <div className="counter">
      <div className="display" aria-live="polite">{count}</div>

      <div className="controls">
        <button onClick={decrement} aria-label="Decrement" className="btn">−</button>
        <button onClick={reset} aria-label="Reset" className="btn">Reset</button>
        <button onClick={increment} aria-label="Increment" className="btn">+</button>
      </div>
    </div>
  );
}
