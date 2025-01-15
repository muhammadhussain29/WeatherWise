import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const ForcastBox = () => {
  return (
    <div className='flex flex-col items-center border p-4 rounded-xl'>
      <h4 className='text-lg m-0 p-0 leading-tight'>2025-01-01</h4>
      <h4 className='text-lg m-0 p-0 leading-tight'>Mon</h4>
      <div className='flex items-end my-2'>
        <h3 className='text-4xl flex items-center'>30&deg;<span className='text-3xl'><FaArrowUp /></span></h3>
        <h4 className='ml-3 text-2xl flex items-center'>28&deg;<span className='text-xl'><FaArrowDown /></span></h4>
      </div>
      <h4 className='text-lg'>Sunny</h4>
    </div>
  )
}

export default ForcastBox