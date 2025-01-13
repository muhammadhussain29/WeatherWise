import React from 'react'

const Weekly = (props) => {
  return (
    <div className={`w-1/3 h-full rounded-xl ml-5 px-10 py-3 ${ props.isDarkMode ? 'dark-bg-contrast' : 'light-bg-contrast'}`}>Weekly</div>
  )
}

export default Weekly