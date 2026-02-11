import React from 'react'
import RecentBlogHeader from './RecentBlogHeader'
import { Outlet } from 'react-router'
import { GetPizzas, GetRecentPizzas } from '../../../hooks/GetPizzas'
import { GetSearchedPizzas } from '../../../hooks//GetSearch'

const RecentBlogs = () => {
  GetPizzas()  
  GetSearchedPizzas()
  GetRecentPizzas()
  return (
    <section className='my-6 md:my-9'>
        <RecentBlogHeader/>
        <div className='my-6 md:my-4'>
          <Outlet/>
        </div>
    </section>
  )
}

export default RecentBlogs