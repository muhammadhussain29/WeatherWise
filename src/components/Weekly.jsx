import React from 'react'

const Weekly = (props) => {
  return (
    <div className={`w-full h-2/5 rounded-xl px-10 py-3 ${ props.isDarkMode ? 'dark-bg-contrast' : 'light-bg-contrast'}`}>Weekly</div>
  )
}

export default Weekly