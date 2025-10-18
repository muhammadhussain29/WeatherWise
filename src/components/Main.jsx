import React from 'react'
import WeatherBox from './WeatherBox';
import { Cloud, CloudRain, CloudSnow, Wind, CloudLightning, CloudFog, Sun, CloudDrizzle } from 'lucide-react';

const Main = (props) => {

  let atmosphere = props.current_observation ? props.current_observation.atmosphere : "";
  let wind = props.current_observation ? props.current_observation.wind : "";

  let showWeatherIcon = (condition) => {
    condition = condition.toLowerCase()
    const iconClasses = `w-40 h-40 md:w-56 md:h-56 float-animation ${props.isDarkMode ? 'text-cyan-400' : 'text-sky-500'}`

    if (condition === "cloudy" || condition === "partialy cloudy") {
      return <Cloud className={iconClasses} strokeWidth={1} />;
    }
    if (condition === "partly cloudy") {
      return <CloudDrizzle className={iconClasses} strokeWidth={1} />;
    }
    else if(condition === "raining"){
      return <CloudRain className={iconClasses} strokeWidth={1} />;
    }
    else if(condition === "snow"){
      return <CloudSnow className={iconClasses} strokeWidth={1} />;
    }
    else if(condition === "windy"){
      return <Wind className={iconClasses} strokeWidth={1} />;
    }
    else if(condition === "stormy"){
      return <CloudLightning className={iconClasses} strokeWidth={1} />;
    }
    else if(condition === "fogg" || condition === "haze"){
      return <CloudFog className={iconClasses} strokeWidth={1} />;
    }
    else{
      return <Sun className={iconClasses} strokeWidth={1} />;
    }
  }

  return (
    <div className={`glass-card h-full md:w-2/3 w-full md:mr-5 mr-0 rounded-3xl px-10 py-10 flex flex-col gap-10 transition-theme ${props.isDarkMode ? 'dark-bg-contrast dark-shadow' : 'light-bg-contrast light-shadow'}`}>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h2 className={`text-3xl md:text-4xl font-bold tracking-tight transition-theme ${ props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>
            Current Weather
          </h2>
          <div className={`px-4 py-2 rounded-full text-sm font-semibold ${props.isDarkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-sky-500/20 text-sky-700'}`}>
            Live
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center gap-8">
          <div className='flex flex-col items-center md:items-start flex-1'>
            <div className="flex items-baseline gap-2">
              <h2 className={`text-8xl md:text-9xl font-bold tracking-tighter ${props.isDarkMode ? 'gradient-text-dark' : 'gradient-text-light'}`}>
                {props.current_observation ? props.current_observation.condition.temperature : "00"}
              </h2>
              <span className={`text-5xl md:text-6xl font-light ${props.isDarkMode ? 'text-cyan-300' : 'text-sky-600'}`}>&deg;C</span>
            </div>
            <div className='mt-6 w-full'>
              <h4 className={`text-2xl md:text-3xl font-semibold outfit transition-theme ${ props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>
                {props.current_observation ? props.current_observation.condition.text : "------" }
              </h4>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            {props.current_observation ? showWeatherIcon(props.current_observation.condition.text) : showWeatherIcon("no value") }
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <WeatherBox isDarkMode={props.isDarkMode} type={"Humidity"} value={atmosphere.humidity} />
        <WeatherBox isDarkMode={props.isDarkMode} type={"Visibility"} value={atmosphere.visibility} />
        <WeatherBox isDarkMode={props.isDarkMode} type={"Pressure"} value={atmosphere.pressure} />
        <WeatherBox isDarkMode={props.isDarkMode} type={"Wind Chills"} value={wind.chill} />
        <WeatherBox isDarkMode={props.isDarkMode} type={"Wind Direction"} value={wind.direction} />
        <WeatherBox isDarkMode={props.isDarkMode} type={"Wind Speed"} value={wind.speed} />
      </div>
    </div>
  )
}

export default Main
