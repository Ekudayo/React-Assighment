import { useState } from "react";
import styles from "../calculatorTwo/calculatorTwo.module.css"; // Importing CSS module for styling

const CalculatorTwo = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Update input on button click
  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Clear input and result
  const handleClear = () => {
    setInput("");
    setResult("");
  };

  // Evaluate the expression
  const handleCalculate = () => {
    try {
      // Use Function constructor for safe evaluation (avoid eval())
      const evaluatedResult = new Function("return " + input)();
      setResult(evaluatedResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className={styles.calculatorContainer}>
      <h2>🖩 Simple Calculator</h2>
      <div className={styles.display}>
        <div>{input || "0"}</div>
        <div className={styles.result}>{result !== "" && "= " + result}</div>
      </div>

      <div className={styles.buttonGrid}>
        {[
          "7",
          "8",
          "9",
          "+",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "*",
          "0",
          ".",
          "/",
          "=",
        ].map((btn, index) => (
          <button
            key={index}
            onClick={() =>
              btn === "=" ? handleCalculate() : handleButtonClick(btn)
            }
          >
            {btn}
          </button>
        ))}
        <button className={styles.clearButton} onClick={handleClear}>
          C
        </button>
      </div>
    </div>
  );
};

export default CalculatorTwo;
