import React from 'react'

const WeatherBox = (props) => {
  return (
    <div className="flex flex-col items-center justify-between">
          <div className="text-2xl">{props.value ? props.value: "--"}</div>
          <div className="text-xl">{props.type}</div>
        </div>
  )
}

export default WeatherBox