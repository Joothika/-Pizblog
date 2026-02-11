import React from 'react'
import { PieChart } from '../AllCharts';
import { GetCommentChart } from '../../../hooks/GetCharts';
import { commentChartHeaderText } from '../../../assets/constant';


const CommentChart = () => {
  const pieChartData = GetCommentChart()

  return (
    <div className='bg-white shadow-xl pt-4 md:pt-8 md:pb-25 md:px-10 md:h-70 max-sm:mt-6'>
        <h2 className='text-secondary justify-self-start max-sm:px-6 text-lg md:text-xl'>{commentChartHeaderText}</h2>
        <PieChart labels = {pieChartData?.labels} 
                  data= {pieChartData?.data} 
        />
    </div>
  )
}

export default CommentChart