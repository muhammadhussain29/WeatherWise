import React from 'react'

const AirCondition = (props) => {
  return (
    <div className={`md:w-1/3 w-full rounded-xl px-10 py-3 flex flex-col justify-between ${props.isDarkMode ? 'dark-bg-contrast dark-shadow' : 'light-bg-contrast light-shadow'}`}>
      <h2 className={`md:text-4xl text-2xl mb-5 md:text-left text-center ${props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>About This Place</h2>
      {/* City/Country  sunrise/sunset Timezone lat/lon Timezone */}
      <div className={`text-xl leading-relaxed capitalize ${props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>
        <h4 className={`flex justify-between mr-5`}>City : <span className={`font-bold ${props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>{props.location.city ? props.location.city : "--"}</span></h4>
        <h4 className={`flex justify-between mr-5`}>Country : <span className={`font-bold ${props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>{props.location.country ? props.location.country : "--"}</span></h4>
        <h4 className={`flex justify-between mr-5`}>Sunrise : <span className={`font-bold ${props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>{props.current_observation.astronomy ? props.current_observation.astronomy.sunrise : "--"}</span></h4>
        <h4 className={`flex justify-between mr-5`}>sunset : <span className={`font-bold ${props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>{props.current_observation.astronomy ? props.current_observation.astronomy.sunset : "--"}</span></h4>
        <h4 className={`flex justify-between mr-5`}>latitude : <span className={`font-bold ${props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>{props.location.lat ? props.location.lat : "--"}</span></h4>
        <h4 className={`flex justify-between mr-5`}>longitude : <span className={`font-bold ${props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>{props.location.long ? props.location.long : "--"}</span></h4>
        <h4 className={`flex justify-between mr-5`}>timezone : <span className={`font-bold ${props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>{props.location.timezone_id ? props.location.timezone_id : "--"}</span></h4>
      </div>
    </div>
  )
}

export default AirCondition