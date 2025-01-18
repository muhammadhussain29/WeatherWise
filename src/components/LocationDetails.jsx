import React from 'react'

const AirCondition = (props) => {
  return (
    <div className={`w-1/3 rounded-xl px-10 py-3 flex flex-col justify-between ${props.isDarkMode ? 'dark-bg-contrast dark-shadow' : 'light-bg-contrast light-shadow'}`}>
      <h2 className={`text-4xl mb-5 ${props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>Geographic Details</h2>
      {/* City/Country  sunrise/sunset Timezone lat/lon */}
      <div >
        <h4 className={`text-xl leading-relaxed flex justify-between mr-5 ${props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>City : <span className={`font-bold ${props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>{props.location.city ? props.location.city : "--"}</span></h4>
        <h4 className={`text-xl leading-relaxed flex justify-between mr-5 ${props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>Country : <span className={`font-bold ${props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>{props.location.country ? props.location.country : "--"}</span></h4>
        <h4 className={`text-xl leading-relaxed flex justify-between mr-5 ${props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>Sunrise : <span className={`font-bold ${props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>{props.current_observation.astronomy ? props.current_observation.astronomy.sunrise : "--"}</span></h4>
        <h4 className={`text-xl leading-relaxed flex justify-between mr-5 ${props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>sunset : <span className={`font-bold ${props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>{props.current_observation.astronomy ? props.current_observation.astronomy.sunset : "--"}</span></h4>
        <h4 className={`text-xl leading-relaxed flex justify-between mr-5 ${props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>latitude : <span className={`font-bold ${props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>{props.location.lat ? props.location.lat : "--"}</span></h4>
        <h4 className={`text-xl leading-relaxed flex justify-between mr-5 ${props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>longitude : <span className={`font-bold ${props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>{props.location.long ? props.location.long : "--"}</span></h4>
        <h4 className={`text-xl leading-relaxed flex justify-between mr-5 ${props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>timezone : <span className={`font-bold ${props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>{props.location.timezone_id ? props.location.timezone_id : "--"}</span></h4>
      </div>
    </div>
  )
}

export default AirCondition