import React from 'react'

const AirCondition = (props) => {
  return (
    <div className={`h-full w-1/3 rounded-xl px-10 py-3 ${props.isDarkMode ? 'dark-bg-contrast' : 'light-bg-contrast'}`}>
      <h2 className="text-4xl mb-5">Geographic Details</h2>
      <h4 className="text-xl">City <span>--</span></h4>
      <h4 className="text-xl">Country <span>--</span></h4>
      <h4 className="text-xl">Sunrise <span>--</span></h4>
      <h4 className="text-xl">sunset <span>--</span></h4>
      <h4 className="text-xl">latitude <span>--</span></h4>
      <h4 className="text-xl">longitude <span>--</span></h4>
      <h4 className="text-xl">timezone <span>--</span></h4>
      {/* City/Country */}
      {/* sunrise / sunset */}
      {/* Timezone */}
      {/* lat / lon */}
    </div>
  )
}

export default AirCondition