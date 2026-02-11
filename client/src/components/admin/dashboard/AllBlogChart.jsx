import React from 'react'
import { LineChart } from '../AllCharts'
import { GetAllBlogChart } from '../../../hooks/GetCharts'
import { blogChartHeaderText } from '../../../assets/constant'


const AllBlogChart = () => {
  const lineChartsData =  GetAllBlogChart()
  return (
    <div className='bg-white shadow-xl py-4 md:py-8 md:px-10 md:mt-6 max-sm:mt-6'>
        <h2 className='text-secondary justify-self-start text-lg md:text-xl max-sm:px-6'>{blogChartHeaderText}</h2>
        <LineChart 
           labels={lineChartsData?.labels}
           data={lineChartsData?.data} 
        />
    </div>
  )
}

export default AllBlogChart