import React from 'react'
import WeatherBox from './WeatherBox';
import { TiWeatherPartlySunny } from "react-icons/ti";

const Main = (props) => {
  return (
    <div className={`h-full w-2/3 mr-5 rounded-xl px-10 py-5 flex flex-col justify-between ${props.isDarkMode ? 'dark-bg-contrast' : 'light-bg-contrast'}`}>
      <div>
        <h2 className="text-4xl">Current Weather</h2>
        <div className="upper flex justify-between items-center">
          <div className="left">
            <div className="temp ">
              {/* Temperature */}
              <div className="text-9xl">00<span>&deg;c</span></div>
              {/* then text ex: mostly cloudy */}
              <div className="text-5xl">Cloudy</div>
            </div>
          </div>
          <div className="right">
            {/* For Image */}
            <TiWeatherPartlySunny className='text-9xl' />
          </div>
        </div>
      </div>
      <div className="lower flex justify-between items-center">
        {/* // humidity pressure visibility */}
        <WeatherBox type={"Humidity"} value={"--"} />
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

