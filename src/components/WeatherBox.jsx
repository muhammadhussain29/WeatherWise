import React from 'react'

const WeatherBox = (props) => {
  return (
    <div className="flex flex-col items-center justify-between">
          <div className={`text-2xl font-medium ${ props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>{props.value ? props.value: "--"}</div>
          <div className={`text-xl ${ props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>{props.type}</div>
        </div>
  )
}

export default WeatherBox