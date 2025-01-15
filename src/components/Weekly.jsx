import React from 'react'
import ForcastBox from './ForcastBox'

const Weekly = (props) => {
  return (
    <div className={`w-full h-2/5 rounded-xl px-10 py-3 ${props.isDarkMode ? 'dark-bg-contrast' : 'light-bg-contrast'}`}>
      <h2 className="text-4xl mb-5">7-Days Forecasts</h2>
      <div className="flex justify-between">
        <ForcastBox />
        <ForcastBox />
        <ForcastBox />
        <ForcastBox />
        <ForcastBox />
        <ForcastBox />
        <ForcastBox />
      </div>
    </div>
  )
}

export default Weekly