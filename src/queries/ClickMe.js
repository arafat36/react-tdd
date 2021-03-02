import React, { useState } from 'react';

function ClickMe() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setTimeout(() => {
      setClicked(true);
    }, 250);
  }

  return (
    <div className="m-2 relative">
      <h3
        className="text-center text-3xl font-bold font-mono py-3 bg-yellow-200 w-3/4 mb-3"
        data-testid="status"
      >
        {clicked ? 'CLICKED!!!' : 'NOT yet clicked...'}
      </h3>
      <button
        className="bg-blue-300 p-3 rounded-md w-3/4"
        onClick={handleClick}
        type="button"
      >
        Click Me!
      </button>
    </div>
  );
}

export default ClickMe;
