import React from 'react'
import { BarChart } from '../AllCharts';
import { GetFeaturedChart } from '../../../hooks/GetCharts';
import { featuredChartHeaderText } from '../../../assets/constant';


const FeaturedBlogChart = () => {
  const barChartData = GetFeaturedChart()

  return (
    <div className='bg-white shadow-xl py-4 md:pt-8 md:pb-25 md:px-10 md:h-70'>
        <h2 className='text-secondary max-sm:px-6 text-lg md:text-xl'>{featuredChartHeaderText}</h2>
        <BarChart labels = {barChartData?.labels} data={barChartData?.data} />
    </div>
  )
}

export default FeaturedBlogChart