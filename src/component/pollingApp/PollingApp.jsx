import { useState } from "react";
import styles from "./pollingApp.module.css";

const PollingApp = () => {
  const [options, setOptions] = useState([]);
  const [newOption, setNewOption] = useState("");
  const [hasVoted, setHasVoted] = useState(false);

  const addOption = (e) => {
    e.preventDefault();
    if (!newOption.trim()) return;
    const newItem = {
      id: Date.now(),
      text: newOption,
      votes: 0,
    };
    setOptions([...options, newItem]);
    setNewOption("");
  };

  const voteOption = (id) => {
    if (hasVoted) {
      alert("You can only vote once!");
      return;
    }

    const updatedOptions = options.map((option) =>
      option.id === id ? { ...option, votes: option.votes + 1 } : option
    );

    setOptions(updatedOptions);
    setHasVoted(true);
  };

  const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);

  return (
    <div className={styles.pollContainer}>
      <h2>📊 Simple Polling App</h2>

      <form onSubmit={addOption} className={styles.formGroup}>
        <input
          type="text"
          placeholder="Enter option"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
        />
        <button type="submit">Add Option</button>
      </form>

      <div className={styles.optionsList}>
        {options.length === 0 ? (
          <p>No options yet. Add one above!</p>
        ) : (
          options.map((option) => (
            <div key={option.id} className={styles.optionItem}>
              <span>{option.text}</span>
              <button onClick={() => voteOption(option.id)}>Vote</button>
              <span>Votes: {option.votes}</span>
            </div>
          ))
        )}
      </div>

      <h3>Total Votes: {totalVotes}</h3>
    </div>
  );
};

export default PollingApp;
