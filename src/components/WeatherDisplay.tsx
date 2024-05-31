import React from 'react';

interface WeatherDisplayProps {
  city: string;
  temperature: number;
  description: string;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  city,
  temperature,
  description,
}) => {
  return (
    <div className="weather-display">
      <h2>{city}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default WeatherDisplay;
