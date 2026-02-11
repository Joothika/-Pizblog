import React from 'react'
import { UseBlogContext } from '../context/BlogDataContext';

export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]


export const dateHelper = (userBlog, currentDate) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const today = currentDate;
    let month = today?.getMonth() ;
    month = months[month]
    const year = today?.getFullYear();
    const date = today?.getDate();
    const dayIndex = today?.getDay();

    if(userBlog == 'userBlog')
      return `${date} ${month} ${year}`
    
    return `${date} ${month} ${year} / ${days[dayIndex]}`
}




export const getDayOfCurrentDate = () => {
  const dayIndex = new Date().getDay()
  return days[dayIndex]
}



export const getDay = (date) => {
  let dayIndex = new Date(date).getDay()
  return days[dayIndex]
}
