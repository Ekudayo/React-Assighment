import { useState } from "react";
import styles from "./expenseTracker.module.css";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const addExpense = (e) => {
    e.preventDefault();
    if (!description || !amount || !date) return;

    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      date,
    };

    setExpenses([newExpense, ...expenses]);
    setDescription("");
    setAmount("");
    setDate("");
  };

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className={styles.expenseContainer}>
      <h2>💸 Expense Tracker</h2>

      <form onSubmit={addExpense} className={styles.expenseForm}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>

      <h3>Total: ${totalExpenses.toFixed(2)}</h3>

      <table className={styles.expenseTable}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount ($)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="3">No expenses added yet.</td>
            </tr>
          ) : (
            expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.amount.toFixed(2)}</td>
                <td>{expense.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTracker;
