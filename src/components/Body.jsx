import React from 'react'
import Main from './Main'
import LocationDetails from './LocationDetails'
import Weekly from './Weekly'

const Body = (props) => {
  return (
    <div className='flex flex-col justify-between'>
        <div className='flex justify-between mb-5 h-full'>
            <Main isDarkMode={props.isDarkMode} switchDarkMode={props.switchDarkMode} current_observation={props.current_observation}/>
            <LocationDetails isDarkMode={props.isDarkMode} switchDarkMode={props.switchDarkMode} location={props.location} current_observation={props.current_observation}/>
        </div>
            <Weekly isDarkMode={props.isDarkMode} switchDarkMode={props.switchDarkMode} forecasts={props.forecasts}/>
    </div>
  )
}

export default Body