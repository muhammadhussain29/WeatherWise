import React, { useEffect, useState, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';
import { City } from 'country-state-city';
import { useDebounce } from 'use-debounce';

const Navbar = (props) => {
  const [search, setSearch] = useState('');
  const [debouncedSearch] = useDebounce(search, 300);
  const [suggestions, setSuggestions] = useState([]);
  const cities = useMemo(() => City.getAllCities(), []);

  const handleSearch = (e) => setSearch(e.target.value);

  useEffect(() => {
    if (debouncedSearch.length > 2) {
      fetchCitySuggestions(debouncedSearch);
    } else {
      setSuggestions([]);
    }
  }, [debouncedSearch]);

  const fetchCitySuggestions = (query) => {
    const res = cities
      .filter((e) => e.name.toLowerCase().includes(query.toLowerCase()))
      .map((e) => e.name);
    setSuggestions(res);
  };

  const handleSuggestionClick = (city) => {
    setSearch(city);
    setSuggestions([]);
    props.setCity(city);
  };

  const searchCity = (e) => {
    e.preventDefault();
    props.setCity(search);
  };

  return (
    <nav
      className={`flex justify-between items-center px-10 py-3 mb-4 rounded-xl ${props.isDarkMode ? 'dark-bg-contrast dark-shadow' : 'light-bg-contrast light-shadow'
        }`}
    >
      <h3
        className={`capitalize text-2xl font-bold playwrite ${props.isDarkMode ? 'dark-primary' : 'light-primary'
          }`}
      >
        WeatherWise
      </h3>

      <form
        onSubmit={searchCity}
        className="flex justify-between items-center rounded-xl bg-white px-4 py-1"
      >
        <input
          type="search"
          placeholder="Plan Ahead: Check Weather by City"
          value={search}
          onChange={handleSearch}
          className="outline-none border-none w-[400px]"
        />
        <button
          type="submit"
          className={`flex items-center p-2 hover:scale-125 transition-all ${props.isDarkMode ? 'dark-primary' : 'light-primary'
            }`}
        >
          <FaSearch />
        </button>

        {suggestions.length > 0 ? (
          <ul
            className="absolute top-16 w-[400px] bg-white border rounded-lg shadow-lg z-10"
            role="listbox"
          >
            {suggestions.slice(0, 7).map((city, index) => (
              <li
                key={index}
                role="option"
                onClick={() => handleSuggestionClick(city)}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                {city}
              </li>
            ))}
          </ul>
        ) : search.length > 2 ? (
          <p className="absolute top-16 w-[400px] bg-white border rounded-lg shadow-lg z-10 px-4 py-2 text-gray-500">
            No cities found.
          </p>
        ) : null}
      </form>

      <button
        onClick={props.switchDarkMode}
        className={`rounded-xl w-[140px] text-center py-2 ml-16 font-medium ${props.isDarkMode ? 'dark-secondary dark-btn' : 'light-secondary light-btn'
          }`}
      >
        {props.isDarkMode ? 'Go Light' : 'Go Dark'}
      </button>
    </nav>
  );
};

export default Navbar;
