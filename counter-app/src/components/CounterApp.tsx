// import all the neccessary hooks and components
import React, { useState, useEffect, useRef } from 'react';

const CounterApp: React.FC = () => {
  // Use the useState Hook to manage the counter value.
  const [count, setCount] = useState<number>(0);

  // Use the useEffect Hook to update the document title with the counter value.
  useEffect(() => {
    document.title = `Counter App | Count: ${count}`;
  }, [count]);

  // Use the useRef Hook to access the DOM button element.
  const incrementButtonRef = useRef<HTMLButtonElement>(null);
  const decrementButtonRef = useRef<HTMLButtonElement>(null);

  // Increment and decrement the counter by clicking the buttons.
  const handleIncrement = () => setCount((prevCount) => prevCount + 1);
  const handleDecrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Counter App</h1>
        <div className="flex items-center justify-between">
          <button
            ref={decrementButtonRef}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="text-3xl font-bold">{count}</span>
          <button
            ref={incrementButtonRef}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md ml-2"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
