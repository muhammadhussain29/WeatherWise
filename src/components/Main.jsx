import React from 'react'

const Main = (props) => {
  return (
    <div className={`h-2/3 rounded-xl px-10 py-3 ${ props.isDarkMode ? 'dark-bg-contrast' : 'light-bg-contrast'}`}>Main</div>
  )
}

export default Main