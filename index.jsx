import React, { useState } from 'react';

function Counter() {
  // 1. Define the State (data)
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1> 
      {/* 2. Just update the state; React handles the "display.textContent" part */}
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
    </div>
  );
}