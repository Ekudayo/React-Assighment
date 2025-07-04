import { useState } from "react"
import styles from "../counterAssigment/counter.module.css"

const Counter = () => {
  const[count, setCount] = useState (0)
  const increment =()=>{
    setCount((prevCount)=>prevCount+1)
  }
  const decrement =()=>{
    setCount((prevCount)=>prevCount-1)
  }
  return (
    <div className={styles.counterContainer}>
      <h1>Counter</h1>
      <div className={styles.counter}>
        <button className={styles.button} onClick={decrement}>
          Decrement
        </button>

        <p className={styles.count}>{count}</p>
        <button className={styles.button} onClick={increment}>
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter