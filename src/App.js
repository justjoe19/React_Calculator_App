import { useState, useRef } from "react";
import "./App.css"; // Import the CSS file

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value)); // Implement subtraction
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value)); // Implement multiplication
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value)); // Implement division
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = ""; // Clear input field
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0); // Reset result to 0
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
        {/* Input field */}
        <input ref={inputRef} type="number" />
        {/* Buttons for mathematical operations */}
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        {/* Buttons for resetting input and result */}
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
        {/* Display result */}
        <p>Result: {result}</p>
      </div>
    </div>
  );
}

export default App;
