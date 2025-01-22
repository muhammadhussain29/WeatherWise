import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const ForcastBox = (props) => {

  let constructDate = (dateFromApi) => {
    const timestamp = dateFromApi; // Your Unix timestamp
    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
    const formattedDate = date.toLocaleString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }); // Formats the date to a readable string
    return formattedDate;
  }

  return (
    <div className='flex flex-col items-center border p-4 rounded-xl'>
      <h4 className={`text-lg m-0 p-0 leading-tight ${props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>{props.date ? constructDate(props.date) : "00-00-00"}</h4>
      <h4 className={`text-lg m-0 p-0 leading-tight ${props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>{props.day ? props.day : "---"}</h4>
      <div className='flex items-end my-2'>
        <h3 className={`text-4xl flex items-center ${props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>{props.high ? props.high : "00"}&deg;<span className='text-3xl'><FaArrowUp /></span></h3>
        <h4 className={`ml-3 text-2xl flex items-center ${props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>{props.low ? props.low : "00"}&deg;<span className='text-xl'><FaArrowDown /></span></h4>
      </div>
      <h4 className={`text-lg ${props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`} >{props.text ? props.text : "-----"}</h4>
    </div>
  )
}

export default ForcastBox