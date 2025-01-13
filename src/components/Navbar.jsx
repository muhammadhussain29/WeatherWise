import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = (props) => {
  // Two-way binding for search bar
  const [search, setSearch] = useState('');

  // Handle search input change
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <nav
      className={`flex justify-between items-center px-10 py-3 mb-4 rounded-xl ${ props.isDarkMode ? 'dark-bg-contrast' : 'light-bg-contrast'}`}
    >
      {/* LOGO */}
      <div className={`capitalize text-2xl font-bold ${ props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>WeatherWise</div>
      
      {/* Search-Bar */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-between items-center rounded-xl bg-white px-4 py-1"
      >
        <input
          type="search"
          placeholder="Search City"
          value={search}
          onChange={handleSearch}
          className="outline-none border-none w-[400px]"
        />
        <button type="submit" className={`flex items-center p-2 ${ props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>
          <FaSearch />
        </button>
      </form>
      
      {/* Theme Button */}
      <button
        onClick={props.switchDarkMode}
        className={`rounded-xl w-[140px] text-center py-2 ${props.isDarkMode ? 'dark-secondary dark-btn' : 'light-secondary light-btn'}`}
      >
        {props.isDarkMode ? 'Light Theme' : 'Dark Theme'}
      </button>
    </nav>
  );
};

export default Navbar;
