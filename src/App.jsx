import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';


const App = () => {
  // const options = {
  //   method: 'GET',
  //   url: 'https://yahoo-weather5.p.rapidapi.com/weather',
  //   params: {
  //     location: 'islamabad',
  //     format: 'json',
  //     u: 'c'
  //   },
  //   headers: {
  //     'x-rapidapi-key': 'b23f1471f5msh7e3ff14218c3251p145e80jsnfa1d1b6f02e6',
  //     'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
  //   }
  // };
  // const result = async () => {
  //   try {
  //     const response = await axios.request(options);
  //     console.log('Weather Data:', response.data);

  //     console.log("humidity: ", response.data.current_observation.atmosphere.humidity);
  //     console.log("visibility: ", response.data.current_observation.atmosphere.visibility);
  //     console.log("pressure: ", response.data.current_observation.atmosphere.pressure);
  //     console.log("Temperature: ", response.data.current_observation.condition.temperature);
  //     console.log("condition: ", response.data.current_observation.condition.text);

  //   } catch (error) {
  //     console.error('Error Message:', error.message);
  //     console.error('Error Response:', error.response?.data);
  //   }
  // };
  // useEffect(() => {
  //   result();
  // }, [




  return (
    <>
      <Navbar/>
    </>
  );
};

export default App;
