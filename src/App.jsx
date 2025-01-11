import React, { useState } from "react";
import logo from "./assets/hackerrank.svg"

const App = () => {
  const [items, setItems] = useState([]); // State to store list items
  const [input, setInput] = useState(""); // State to manage input field

  const addItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input]); // Add input value to items
      setInput(""); // Clear input field
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        {/* Header */}
        <div className="bg-gray-900 w-full py-4 flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="React Logo"
              className="bg-green-500 inline-block pr-1"
            />
            <h1 className=" text-green-500 text-2xl font-semibold">
              Item List Manager
            </h1>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-8 w-full max-w-lg bg-white p-6 rounded-md shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Item List</h2>

          {/* Input Section */}
          <div className="flex flex-col items-center space-x-2 mb-6">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow border mb-3 w-full border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter item"
            />
            <button
              onClick={addItem}
              className="bg-green-500 w-full text-white font-bold text-lg px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none"
            >
              Add Item
            </button>
          </div>

          {/* Items List */}
          <ul className="list-none space-y-2">
            {items.map((item, index) => (
              <li
                key={index}
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md shadow-sm text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
