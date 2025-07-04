import { useState, useEffect } from "react";
import styles from "./dataFetcher.module.css";

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h2>📋 User List</h2>

      {loading && <p className={styles.loading}>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {!loading && !error && (
        <ul className={styles.list}>
          {data.map((item) => (
            <li key={item.id} className={styles.listItem}>
              <strong>{item.name}</strong> - {item.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
