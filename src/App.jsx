import { useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";

function App() {
  const [city, setCity] = useState("Toronto");
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);

  const API_KEY = process.env.REACT_APP_WEATHER_KEY;

  const fetchWeather = async () => {
    try {
      // Fetch current weather
      const currentRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setCurrent(currentRes.data);

      // Fetch 5-day forecast
      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      // Reduce to one forecast per day at 12 PM
      const filtered = forecastRes.data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );

      setForecast(filtered);
    } catch (error) {
      alert("Invalid city. Try again.");
    }
  };

  return (
    <div className="main-container">
      <h1 className="main-title">Weather Forecast</h1>
      <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />

      <div className="weather-grid">
        {current && <CurrentWeather data={current} />}
        {forecast.length > 0 && <Forecast data={forecast} />}
      </div>
      <p className="p">Developed by Hetvi Patel</p>
      <p className="p">101508910</p>
    </div>
  );
}

export default App;
