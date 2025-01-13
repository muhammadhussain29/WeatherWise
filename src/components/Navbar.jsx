import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    // Two way binding for search-bar
    const [search, setsearch] = useState("")

    // Two way binding for search-bar
    let handleSearch = (e) => {
        setsearch(e.target.value)
    }

    return (
        <nav className='flex justify-between items-center px-10 py-4 bg-blue-400'>
            {/* LOGO */}
            <div className="logo text-2xl font-bold">WeatherWise</div>
            {/* Search-Bar */}
            <form onSubmit={(e) => e.preventDefault()} className='flex justify-between items-center border rounded-2xl bg-white px-4 py-1' >
                <input type="search" placeholder='Search City' value={search} onChange={handleSearch} className='outline-none border-none w-[400px]' />
                <button type="submit" className="flex items-center p-2">
                    <FaSearch className="text-gray-600" />
                </button>
            </form>
            {/* Theme Button */}
            <button className='border rounded-2xl bg-blue-500 px-3 py-2'>Dark Theme</button>
        </nav>
    )
}

export default Navbar