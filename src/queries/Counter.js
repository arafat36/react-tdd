import React, { useState } from 'react';

function Counter() {
  const [total, setTotal] = useState(0);

  function increment() {
    setTotal((current) => current + 1);
  }
  function decrement() {
    setTotal((current) => current - 1);
  }

  return (
    <div className="container mt-4 mx-auto py-5 max-w-md text-center flex flex-col gap-6 bg-yellow-100">
      <h1 className="text-3xl uppercase" data-testid="heading">
        Counter
      </h1>
      <div className="text-5xl font-mono" data-testid="total">
        {total}
      </div>
      <div className="flex gap-5 justify-center ">
        <button
          className="py-3 px-7 text-3xl font-bold bg-blue-200"
          type="button"
          onClick={increment}
          data-testid="inc"
        >
          +
        </button>
        <button
          className="py-3 px-7 text-3xl font-bold bg-blue-200"
          type="button"
          onClick={decrement}
          data-testid="dec"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
