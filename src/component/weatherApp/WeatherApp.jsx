import { useState } from "react";
import styles from "../weatherApp/weatherApp.module.css";
const apiKey = "983e3eb3e11159b62fd17eb593b3db57"; // at top level

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "e4f8d7c1dcca14f2c0294c3bdb78e0c1"; // inside the component

  const getWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      const data = await response.json();

      if (response.status !== 200) {
        setError(data.message || "City not found.");
        setWeather(null);
      } else {
        setWeather(data);
        setError("");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Something went wrong. Please check your connection.");
      setWeather(null);
    }
  };

  return (
    <div className={styles.weatherContainer}>
      <h2>🌦️ Simple Weather App</h2>

      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Get Weather</button>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      {weather && (
        <div className={styles.weatherCard}>
          <h3>
            {weather.name}
            {weather.sys && `, ${weather.sys.country}`}
          </h3>
          <p>
            <strong>Temperature:</strong> {weather.main.temp}°C
          </p>
          <p>
            <strong>Humidity:</strong> {weather.main.humidity}%
          </p>
          <p>
            <strong>Condition:</strong> {weather.weather[0].main}
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
