import { useState } from "react";
import styles from "./calculator.module.css"; // Importing CSS module for styling

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className={styles.calculatorContainer}>
      <h2>Simple Calculator</h2>
      <div className={styles.display}>
        <input className={styles.input} type="text" value={input} readOnly />
        <div className={styles.result}>Result: {result}</div>
      </div>
      <div className={styles.buttons}>
        {[..."7894561230"].map((num) => (
          <button key={num} onClick={() => handleButtonClick(num)}>
            {num}
          </button>
        ))}

        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("/")}>/</button>

        <button onClick={handleCalculate} className={styles.equalBtn}>
          =
        </button>
        <button onClick={handleClear} className={styles.clearBtn}>
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
