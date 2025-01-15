import React from 'react'

const AirCondition = (props) => {
  return (
    <div className={`w-1/3 rounded-xl px-10 py-3 flex flex-col justify-between ${props.isDarkMode ? 'dark-bg-contrast' : 'light-bg-contrast'}`}>
      <h2 className="text-4xl mb-5">Geographic Details</h2>
      {/* City/Country  sunrise/sunset Timezone lat/lon */}
      <div >
      <h4 className="text-xl leading-relaxed flex justify-between mr-5">City : <span>--</span></h4>
      <h4 className="text-xl leading-relaxed flex justify-between mr-5">Country : <span>--</span></h4>
      <h4 className="text-xl leading-relaxed flex justify-between mr-5">Sunrise : <span>--</span></h4>
      <h4 className="text-xl leading-relaxed flex justify-between mr-5">sunset : <span>--</span></h4>
      <h4 className="text-xl leading-relaxed flex justify-between mr-5">latitude : <span>--</span></h4>
      <h4 className="text-xl leading-relaxed flex justify-between mr-5">longitude : <span>--</span></h4>
      <h4 className="text-xl leading-relaxed flex justify-between mr-5">timezone : <span>--</span></h4>
      </div>
    </div>
  )
}

export default AirCondition