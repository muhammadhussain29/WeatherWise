import React from 'react'

const AirCondition = (props) => {
  return (
    <div className={`h-full w-1/3 rounded-xl px-10 py-3 ${ props.isDarkMode ? 'dark-bg-contrast' : 'light-bg-contrast'}`}>
      General details
      {/* City/Country */}

          {/* sunrise / sunset */}
          {/* Timezone */}
          {/* lat / lon */}
      </div>
  )
}

export default AirCondition