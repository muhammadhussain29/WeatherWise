import React from 'react'
import ForcastBox from './ForcastBox'

const Weekly = (props) => {

  let forecasts = props.forecasts ? props.forecasts : [] ; 

  return (
    <div className={`w-full h-2/5 rounded-xl px-10 py-3 ${props.isDarkMode ? 'dark-bg-contrast dark-shadow' : 'light-bg-contrast light-shadow'}`}>
      <h2 className={`md:text-4xl text-2xl mb-5 md:text-left text-center ${ props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>Extended Weather Forecast</h2>
      <div className="flex lg:gap-16 md:gap-10 gap-5 md:flex-row flex-col justify-center flex-wrap my-5">
        <ForcastBox isDarkMode={props.isDarkMode}/>
        <ForcastBox isDarkMode={props.isDarkMode}/>
        <ForcastBox isDarkMode={props.isDarkMode}/>
        <ForcastBox isDarkMode={props.isDarkMode}/>
        <ForcastBox isDarkMode={props.isDarkMode}/>
        <ForcastBox isDarkMode={props.isDarkMode}/>
        <ForcastBox isDarkMode={props.isDarkMode}/>
        <ForcastBox isDarkMode={props.isDarkMode}/>
        <ForcastBox isDarkMode={props.isDarkMode}/>
        <ForcastBox isDarkMode={props.isDarkMode}/>
        {/* {forecasts.map((elem, index)=>{
          return <ForcastBox isDarkMode={props.isDarkMode} date={elem.date} day={elem.day} high={elem.high} low={elem.low} text={elem.text}/>
        })} */}
      </div>
    </div>
  )
}

export default Weekly