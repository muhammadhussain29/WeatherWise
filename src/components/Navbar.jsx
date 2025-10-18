import React, { useEffect, useState, useMemo, useRef } from 'react';
import { Search, Moon, Sun, MapPin } from 'lucide-react';
import { City } from 'country-state-city';
import { useDebounce } from 'use-debounce';

const Navbar = (props) => {
  const [search, setSearch] = useState('');
  const [debouncedSearch] = useDebounce(search, 300);
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // ✅ new state
  const dropdownRef = useRef(null);
  const cities = useMemo(() => City.getAllCities(), []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setIsDropdownVisible(true); // ✅ show dropdown when typing
  };

  useEffect(() => {
    if (debouncedSearch.length > 2) {
      const res = cities
        .filter((e) => e.name.toLowerCase().includes(debouncedSearch.toLowerCase()))
        .map((e) => e.name);
      setSuggestions(res);
    } else {
      setSuggestions([]);
    }
  }, [debouncedSearch]);

  const handleSuggestionClick = (city) => {
    setSearch(city);
    setSuggestions([]);
    props.setCity(city);
    setIsDropdownVisible(false); // ✅ hide dropdown after click
  };

  // ✅ Optional: hide dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchCity = (e) => {
    e.preventDefault();
    if (search.trim()) {
      props.setCity(search);
      setIsDropdownVisible(false);
    } else {
      alert("Please enter a valid city name.");
    }
  };

  return (
    <nav
      className={`glass-card z-[9999] flex md:flex-row flex-col gap-5 justify-between items-center px-8 py-6 mb-8 rounded-3xl transition-theme ${
        props.isDarkMode ? 'dark-bg-contrast dark-shadow' : 'light-bg-contrast light-shadow'
      }`}
    >
      {/* logo */}
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-xl ${props.isDarkMode ? 'bg-cyan-500/20' : 'bg-sky-500/20'}`}>
          <MapPin className={`w-6 h-6 ${props.isDarkMode ? 'text-cyan-400' : 'text-sky-600'}`} />
        </div>
        <h3 className={`text-2xl font-bold playwrite ${props.isDarkMode ? 'gradient-text-dark' : 'gradient-text-light'}`}>
          WeatherWise
        </h3>
      </div>

      {/* search input */}
      <form
        onSubmit={searchCity}
        className={`modern-input relative flex justify-between items-center rounded-2xl md:px-6 px-4 py-4 min-w-[320px] md:min-w-[400px] transition-theme ${
          props.isDarkMode ? 'bg-slate-800/80 border border-cyan-500/30' : 'bg-white/80 border border-sky-300/50'
        }`}
      >
        <input
          type="search"
          placeholder="Search for your city..."
          value={search}
          onChange={handleSearch}
          className={`outline-none border-none flex-1 bg-transparent font-medium transition-theme ${
            props.isDarkMode ? 'text-slate-100 placeholder-slate-400' : 'text-slate-800 placeholder-slate-400'
          }`}
        />
        <button
          type="submit"
          className={`flex items-center justify-center p-2.5 rounded-xl ml-2 transition-all hover:scale-110 ${
            props.isDarkMode ? 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30' : 'bg-sky-500/20 text-sky-600 hover:bg-sky-500/30'
          }`}
        >
          <Search className="w-5 h-5" />
        </button>

        {/* dropdown */}
        {isDropdownVisible && (
          <div ref={dropdownRef} className="absolute top-full mt-2 left-0 right-0 z-[9999]">
            {suggestions.length > 0 ? (
              <ul
                className={`rounded-2xl shadow-2xl overflow-hidden transition-theme ${
                  props.isDarkMode
                    ? 'bg-slate-800/95 backdrop-blur-xl border border-cyan-500/30'
                    : 'bg-white/95 backdrop-blur-xl border border-sky-300/50'
                }`}
              >
                {suggestions.slice(0, 9).map((city, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(city)}
                    className={`px-6 py-3.5 cursor-pointer font-medium transition-all ${
                      props.isDarkMode
                        ? 'hover:bg-cyan-500/20 text-slate-100 border-b border-slate-700/50 last:border-b-0'
                        : 'hover:bg-sky-50 text-slate-800 border-b border-slate-100 last:border-b-0'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className={`w-4 h-4 ${props.isDarkMode ? 'text-cyan-400' : 'text-sky-600'}`} />
                      {city}
                    </div>
                  </li>
                ))}
              </ul>
            ) : debouncedSearch.length > 2 ? (
              <div
                className={`rounded-2xl shadow-2xl px-6 py-3.5 transition-theme ${
                  props.isDarkMode
                    ? 'bg-slate-800/95 backdrop-blur-xl border border-cyan-500/30 text-slate-400'
                    : 'bg-white/95 backdrop-blur-xl border border-sky-300/50 text-slate-500'
                }`}
              >
                No cities found.
              </div>
            ) : null}
          </div>
        )}
      </form>

      {/* dark mode toggle */}
      <button
        onClick={props.switchDarkMode}
        className={`rounded-2xl px-6 py-3.5 font-semibold flex items-center justify-center gap-2.5 min-w-[140px] transition-theme ${
          props.isDarkMode ? 'dark-btn' : 'light-btn'
        }`}
      >
        {props.isDarkMode ? (
          <>
            <Sun className="w-5 h-5" />
            <span>Light</span>
          </>
        ) : (
          <>
            <Moon className="w-5 h-5" />
            <span>Dark</span>
          </>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
