
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ConversionComponent = ({ convertedCode }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Converted ES6 Code:</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {convertedCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default ConversionComponent;
