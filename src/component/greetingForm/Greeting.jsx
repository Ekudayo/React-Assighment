import styles from "../../component/greetingForm/greeting.module.css";
import { useState } from "react";

const Greeting = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setGreeting(`Hello, ${name}!`);
    setName("");
  };
  return (
    <div>
      <h1>Greeting Form</h1>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        {greeting && <p className={styles.greeting}>{greeting}</p>}
      </div>
    </div>
  );
}

export default Greeting