
import React from "react";

const InputComponent = ({ code, setCode, handleConvert }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Enter ES5 JavaScript Code:</h2>
      <textarea
        className="w-full h-40 p-2 border rounded-md"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your ES5 code here..."
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleConvert}
      >
        Convert to ES6
      </button>
    </div>
  );
};

export default InputComponent;
