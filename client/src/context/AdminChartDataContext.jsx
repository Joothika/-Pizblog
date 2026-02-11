import React, { createContext, useContext, useState } from 'react'


const ChartContext = createContext()

export const AdminChartDataContext = ({children}) => {
  const [commentChartLabels, setCommentChartLabels] = useState([])
  const [commentChartData, setCommentChartData] = useState([])
  const [commentChart, setCommentChart] = useState({})

  const value = {
    commentChartLabels, setCommentChartLabels,
    commentChartData, setCommentChartData,
    commentChart, setCommentChart
  }
  return (
    <ChartContext.Provider value={value}>{children}</ChartContext.Provider>
  )
}

export const UseChartContext = () => {
  return useContext(ChartContext)
}