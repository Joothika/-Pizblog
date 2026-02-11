import React from 'react'
import FeaturedBlogChart from './FeaturedBlogChart'
import CommentChart from './CommentChart'
import TodayBlogList from './TodayBlogList'
import AllBlogChart from './AllBlogChart'

const Charts = () => {
  
  return (
    <section className='my-6 md:my-10'>
        <div className='grid max-sm:gris-rows-auto md:grid-cols-[3fr_1.5fr] md:gap-x-5'>
            <div className='md:grid-rows-[300px_200px]'>
              <div className='grid md:grid-cols-2 gap-x-5'>
                <FeaturedBlogChart/>
                <CommentChart/>
              </div>
              <AllBlogChart/>
            </div>
            <TodayBlogList/>
        </div>

    </section>
  )
}

export default Charts