import React from 'react'
import WeatherBox from './WeatherBox';
import { TiWeatherPartlySunny } from "react-icons/ti";

const Main = (props) => {
  return (
    <div className={`h-full w-2/3 mr-5 rounded-xl px-10 py-5 flex flex-col justify-between ${props.isDarkMode ? 'dark-bg-contrast' : 'light-bg-contrast'}`}>
      <div>
        <h2 className="text-4xl">Current Weather</h2>
        {/* Main upper section */}
        <div className="flex justify-between items-center">
          {/* Temperature */}
          {/* then text ex: mostly cloudy */}
          <div>
            <h2 className="text-9xl outfit">00<span>&deg;c</span></h2>
            <h4 className="text-5xl outfit">Cloudy</h4>
          </div>
          {/* For Image */}
          <div>
            <TiWeatherPartlySunny className='text-[170px] mr-16' />
          </div>
        </div>
      </div>
      {/* Main lower section */}
      <div className="flex justify-between items-center mt-8">
        {/* // humidity pressure visibility */}
        <WeatherBox type={"Humidity"} value={""} />
        <WeatherBox type={"Visibility"} value={"--"} />
        <WeatherBox type={"Pressure"} value={"--"} />
        {/* // wind: chill speed direction */}
        <WeatherBox type={"Wind Chills"} value={"--"} />
        <WeatherBox type={"Wind Direction"} value={"--"} />
        <WeatherBox type={"Wind Speed"} value={"--"} />
      </div>
    </div>
  )
}

export default Main

