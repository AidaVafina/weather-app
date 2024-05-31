import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import Input from './Input';

interface CitySearchProps {
  onSearch: (city: string) => void;
}

const CitySearch: React.FC<CitySearchProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = useCallback(
    debounce((city: string) => {
      onSearch(city);
    }, 500),
    [onSearch],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div>
      <Input
        placeholder="Enter city name"
        value={city}
        onChange={handleChange}
        onSubmit={() => onSearch(city)}
      />
    </div>
  );
};

export default CitySearch;
