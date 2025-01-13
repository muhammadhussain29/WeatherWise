import React from 'react'

const AirCondition = (props) => {
  return (
    <div className={`h-1/3 rounded-xl mt-5 px-10 py-3 ${ props.isDarkMode ? 'dark-bg-contrast' : 'light-bg-contrast'}`}>AirCondition</div>
  )
}

export default AirCondition