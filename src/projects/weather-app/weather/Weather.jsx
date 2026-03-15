import { useEffect, useState } from 'react';
import { Search } from '../search/Search';
import './Weather.css';

export default function Weather() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,
      );
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();

      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch(event) {
    event.preventDefault();
    fetchWeatherData(search);
    setSearch('');
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString('en-uk', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }

  useEffect(() => {
    fetchWeatherData('oslo');
  }, []);

  return (
    <div className="Weather">
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">{Math.round(weatherData?.main?.temp - 273)}°C</div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ''}
          </p>
          <div className="weather-info">
            <div className="column">
              <div>
                <p className="wind">{weatherData?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div className="column">
              <div>
                <p className="humidity">{weatherData?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
