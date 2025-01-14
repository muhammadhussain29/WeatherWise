import React from 'react'
import Main from './Main'
import LocationDetails from './LocationDetails'
import Weekly from './Weekly'

const Body = (props) => {
  return (
    <div className='flex flex-col justify-between h-[80vh]'>
        <div className='flex justify-between mb-5 h-full'>
            <Main isDarkMode={props.isDarkMode} switchDarkMode={props.switchDarkMode}/>
            <LocationDetails isDarkMode={props.isDarkMode} switchDarkMode={props.switchDarkMode}/>
        </div>
            <Weekly isDarkMode={props.isDarkMode} switchDarkMode={props.switchDarkMode}/>
    </div>
  )
}

export default Body