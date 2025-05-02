import React, { useState } from 'react';

const Weather = () => {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState('');
  let weatherMessage = '';

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(inputValue.toLowerCase()); 
  };

  if (data === 'sunny') {
    weatherMessage = "☀️ It's bright outside!";
  } else if (data === 'rainy') {
    weatherMessage = "🌧️ Don't forget your umbrella!";
  } else if (data === 'cloudy') {
    weatherMessage = "☁️ Looks gloomy!";
  } else if (data === 'snow') {
    weatherMessage = "❄️ Brrr, wear warm clothes!";
  } else if (data) {
    weatherMessage = "⚠️ Please enter a valid weather type";
  }

  return (
    <div>
      <h1>Weather Condition</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter weather (e.g., sunny)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <h3>{weatherMessage}</h3>
    </div>
  );
};

export default Weather;
