import React from 'react'
import WeatherBox from './WeatherBox';
import Sunny from '../assets/sunny.png';
import Cloudy from '../assets/cloudy.png';
import PartialyCloudy from '../assets/partially-cloudy.png';
import Rainy from '../assets/rainy.png';
import Snowy from '../assets/snowy.png';
import Windy from '../assets/windy.png';
import Stormy from '../assets/stormy.png';
import FogHaze from '../assets/fog-haze.png';

const Main = (props) => {

  let atmosphere = props.current_observation ? props.current_observation.atmosphere : ""; 
  let wind = props.current_observation ? props.current_observation.wind : ""; 

  let showWeatherIcon = (condition) => {
    condition = condition.toLowerCase()
    if (condition == "cloudy" || condition == "partialy cloudy") {
      return <img className="hover:scale-110 transition" src={Cloudy} alt="Cloudy"/>;
    }
    if (condition == "partly cloudy") {
      return <img className="hover:scale-110 transition" src={PartialyCloudy} alt="Partialy Cloudy"/>;
    }
    else if(condition == "raining"){
      return <img className="hover:scale-110 transition" src={Rainy} alt="Rain" />;
    }
    else if(condition == "snow"){
      return <img className="hover:scale-110 transition" src={Snowy} alt="Cloudy" />;
    }
    else if(condition == "windy"){
      return <img className="hover:scale-110 transition" src={Windy} alt="Cloudy" />;
    }
    else if(condition == "stormy"){
      return <img className="hover:scale-110 transition" src={Stormy} alt="Cloudy" />;
    }
    else if(condition == "fogg" || condition == "haze"){
      return <img className="hover:scale-110 transition" src={FogHaze} alt="Cloudy" />;
    }
    else{
      return <img className="hover:scale-110 transition" src={Sunny} alt="Sun" />;
    }
  }

  return (
    <div className={`h-full w-2/3 mr-5 rounded-xl px-10 py-5 flex flex-col justify-between ${props.isDarkMode ? 'dark-bg-contrast dark-shadow' : 'light-bg-contrast light-shadow'}`}>
      <div>
        <h2 className={`text-3xl font-medium mb-5 ${ props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>Today's Weather</h2>
        {/* Main upper section */}
        <div className="flex justify-between items-center">
          {/* Temperature */}
          {/* then text ex: mostly cloudy */}
          <div className='flex flex-col items-center'>
            <h2 className={`text-9xl font-medium ${ props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>{props.current_observation ? props.current_observation.condition.temperature : "00" }<span>&deg;c</span></h2>
            <div className='flex items-center w-full'>
              <div className={`w-full h-1 bg-black rounded-full ${props.isDarkMode ? 'dark-bg-primary' : 'light-bg-primary'}`}></div>
            <h4 className={`text-4xl outfit mx-2 text-nowrap ${ props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>{props.current_observation ? props.current_observation.condition.text : "------" }</h4>
              <div className={`w-full h-1 bg-black rounded-full ${props.isDarkMode ? 'dark-bg-primary' : 'light-bg-primary'}`}></div>
            </div>
          </div>
          {/* For Image */}
          <div className='w-[200px] mr-32'>
            {props.current_observation ? showWeatherIcon(props.current_observation.condition.text) : showWeatherIcon("no value") }
          </div>
        </div>
      </div>
      {/* Main lower section */}
      <div className="flex justify-between items-center mt-8">
        {/* // humidity pressure visibility */}
        <WeatherBox isDarkMode={props.isDarkMode} type={"Humidity"} value={atmosphere.humidity} />
        <WeatherBox isDarkMode={props.isDarkMode} type={"Visibility"} value={atmosphere.visibility} />
        <WeatherBox isDarkMode={props.isDarkMode} type={"Pressure"} value={atmosphere.pressure} />
        {/* // wind: chill speed direction */}
        <WeatherBox isDarkMode={props.isDarkMode} type={"Wind Chills"} value={wind.chill} />
        <WeatherBox isDarkMode={props.isDarkMode} type={"Wind Direction"} value={wind.direction} />
        <WeatherBox isDarkMode={props.isDarkMode} type={"Wind Speed"} value={wind.speed} />
      </div>
    </div>
  )
}

export default Main

