import React, { useState } from 'react';
import cls from './Counter.module.css';
// import cls from './Counter.css'; // Doesn't work like this...

function Counter() {
  const [total, setTotal] = useState(0);

  function increment() {
    setTotal((current) => current + 1);
  }
  function decrement() {
    setTotal((current) => current - 1);
  }

  return (
    <div className={cls.wrapper}>
      <h1 className={cls.heading} data-testid="heading">
        Counter
      </h1>
      <div className={cls.total} data-testid="total">
        {total}
      </div>
      <div className={cls.buttons}>
        <button type="button" onClick={increment} data-testid="inc">
          +
        </button>
        <button type="button" onClick={decrement} data-testid="dec">
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
