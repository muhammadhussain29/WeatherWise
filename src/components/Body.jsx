import React from 'react'
import Main from './Main'
import AirCondition from './AirCondition'
import Weekly from './Weekly'

const Body = (props) => {
  return (
    <div className='flex justify-between h-[80vh]'>
        <div className='flex flex-col justify-between w-2/3 h-full'>
            <Main isDarkMode={props.isDarkMode} switchDarkMode={props.switchDarkMode}/>
            <AirCondition isDarkMode={props.isDarkMode} switchDarkMode={props.switchDarkMode}/>
        </div>
        <Weekly isDarkMode={props.isDarkMode} switchDarkMode={props.switchDarkMode}/>
    </div>
  )
}

export default Body