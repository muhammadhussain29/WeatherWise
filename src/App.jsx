import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Body from './components/Body';

const App = () => {
  
  const [city, setCity] = useState(""); // Holds the city name
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode toggle
  const [current_observation, setCurrent_observation] = useState("")
  const [forecasts, setForecasts] = useState("")
  const [location, setLocation] = useState("")

  // Function to toggle dark mode
  const switchDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Function to fetch user's location
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  };

  // Callback when location is successfully fetched
  const success = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Convert lat/lon to city using OpenCage API
    const apiKey = "e213e96b2cf94d67b33c2f2a8f19a7f0";
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      const location =
        response.data.results[0].components.city ||
        response.data.results[0].components.town ||
        response.data.results[0].components.village;

      if (location) {
        setCity(location); // Update city state
      } else {
        console.error("Location not found");
      }
    } catch (error) {
      console.error("Error fetching geocoding data:", error);
    }
  };

  // Callback if location fetching fails
  const error = (e) => {
    console.error("Error fetching location:", e);
  };

  // Function to fetch weather data
  const fetchWeatherData = async () => {
    const options = {
      method: "GET",
      url: "https://yahoo-weather5.p.rapidapi.com/weather",
      params: {
        location: city,
        format: "json",
        u: "c",
      },
      headers: {
        "x-rapidapi-key": "706f5ebbecmsh149114f2bf43afdp1a6329jsn0dd215c8fc80",
        "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log("Weather Data:", response.data);

      // Example logging weather details
      setCurrent_observation(response.data.current_observation);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  };

  // // Effect to fetch location and weather on the first render
  // useEffect(() => {
  //   const fetchLocationAndWeather = async () => {
  //     await handleLocationClick(); // Get location
  //   };
  //   fetchLocationAndWeather();
  // }, []);

  // // Effect to fetch weather when the city changes
  // useEffect(() => {
  //   if (city) {
  //     fetchWeatherData();
  //   }
  // }, [city]); 
  

  return (
    <div className={`w-full h-screen px-5 py-4 ${isDarkMode ? 'dark-bg' : 'light-bg'
      }`}>
      <Navbar isDarkMode={isDarkMode} switchDarkMode={switchDarkMode} setCity={setCity} />
      <Body isDarkMode={isDarkMode} switchDarkMode={switchDarkMode} location={location} forecasts={forecasts} current_observation={current_observation}/>
    </div>
  );
};

export default App;
