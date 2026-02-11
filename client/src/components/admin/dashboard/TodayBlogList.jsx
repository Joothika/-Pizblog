import React from 'react'
import { UsePizzaContext } from '../../../context/PizzaDataContext'
import { GetTodayPizzas} from '../../../hooks/GetPizzas'
import { dateHelper } from '../../../helpers/dateHelper'
import { todayBlogHeaderText } from '../../../assets/constant'

const TodayBlogList = () => {
  const {todayPizzas} = UsePizzaContext()
  GetTodayPizzas()

  return (
    <div className='bg-white rounded-md shadow-xl py-6 md:py-8 max-sm:mt-6'>
        <h2 className='text-secondary text-xl text-center'>{todayBlogHeaderText}</h2>
        <ul className='flex justify-between px-6 md:px-10 my-6 md:my-10'>
            <li className='bg-primary text-white px-2 md:py-1'>count: {todayPizzas?.count}</li>
            <li className='border border-secondary px-2 md:py-1'>{dateHelper('adminBlog',new Date())}</li>
        </ul>
        <div className='grid gap-4'>
          {
            todayPizzas?.map(todayBlog => {
              return(
                <div key={todayBlog?._id} className='grid cursor-pointer md:grid-cols-[1fr_2fr] md:gap-x-5 max-sm:px-5 max-sm:py-2 md:p-2 hover:bg-primary/20'>
                  <img src={todayBlog?.link} alt="" />
                  <ul className='cursor-pointer md:self-center max-sm:mt-2 max-sm:flex max-sm:justify-between'>
                    <li>{todayBlog?.title?.toUpperCase()}</li>
                    <li className='text-ternary md:mt-2'>{todayBlog?._id}</li>
                  </ul>
                </div>
              )
            })
          }
        </div>
         
    </div>
  )
}

export default TodayBlogList