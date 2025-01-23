import React from 'react'

const Loader = (props) => {
  return (
    <div className={`w-screen h-screen bg-white/50 fixed flex justify-center items-center ${props.isLoading ? 'block' : 'hidden' } `}>
        <h1 className={`loader playwrite text-5xl font-black capitalize ${props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>weather Wise</h1>
    </div>
  )
}

export default Loader