
import React, { useState } from "react";
import InputComponent from "./components/InputComponent";
import ConversionComponent from "./components/ConversionComponent";

function App() {
  const [code, setCode] = useState("");
  const [convertedCode, setConvertedCode] = useState("");

  const handleConvert = () => {
    if (!code.trim()) {
      alert("Please enter some ES5 code to convert!");
      return;
    }

    let output = code;

    // Basic ES5 → ES6 transformations
    output = output.replace(/\bvar\b/g, "let");
    output = output.replace(
      /function\s*(\w*)\s*\(([^)]*)\)\s*{([^}]*)}/g,
      "($2) => {$3}"
    );

    setConvertedCode(output);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        JavaScript Modernization Tool
      </h1>
      <InputComponent code={code} setCode={setCode} handleConvert={handleConvert} />
      {convertedCode && <ConversionComponent convertedCode={convertedCode} />}
    </div>
  );
}

export default App;
