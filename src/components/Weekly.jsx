import React from 'react'
import ForcastBox from './ForcastBox'

const Weekly = (props) => {
  return (
    <div className={`w-full h-2/5 rounded-xl px-10 py-3 ${props.isDarkMode ? 'dark-bg-contrast dark-shadow' : 'light-bg-contrast light-shadow'}`}>
      <h2 className={`text-4xl mb-5 ${ props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>Weekly Forecasts</h2>
      <div className="flex justify-between">
        <ForcastBox isDarkMode={props.isDarkMode} />
        <ForcastBox isDarkMode={props.isDarkMode} />
        <ForcastBox isDarkMode={props.isDarkMode} />
        <ForcastBox isDarkMode={props.isDarkMode} />
        <ForcastBox isDarkMode={props.isDarkMode} />
        <ForcastBox isDarkMode={props.isDarkMode} />
        <ForcastBox isDarkMode={props.isDarkMode} />
      </div>
    </div>
  )
}

export default Weekly