import React from 'react'
import { AddIcon, RefreshIcon, ViewIcon } from '../../../utils/SvgImages'
import { Link } from 'react-router'
import { UseBlogContext } from '../../../context/BlogDataContext'
import { allRecentBlogsHelper } from '../../../helpers/recentBlogHeaderHelper'
import { addButtonText, recentBlogTableHeaderText, viewButtonText } from '../../../assets/constant'

const RecentBlogHeader = () => {
    const {setApproved, setNotApproved} = UseBlogContext()
  
  return (
    <div className='grid grid-cols-[5fr_1fr]'>
        <Link to={'/admin/blog'} className='flex gap-x-3'>
             <h2 className='text-lg md:text-xl text-secondary'>{recentBlogTableHeaderText}</h2>
             <button className='cursor-pointer mt-1.5 md:mt-[-0.9rem]' onClick={e => allRecentBlogsHelper(e,setApproved, setNotApproved)}>
              <RefreshIcon w={23} h={23} />
             </button>
        </Link>
        <div className='grid grid-cols-2 max-sm:grid-cols-[1fr_2fr] gap-x-7 md:gap-x-6'>
            <Link to={'/admin/blog/add'}  className='flex gap-1 justify-center  md:border border-ternary text-secondary md:py-2 hover:bg-primary/30 hover:border-none cursor-pointer'>
                    <AddIcon w={24} h={24} style={'mt-[2.65px]'} />
                    <span className='hidden md:block md:text-lg'>{addButtonText}</span>
            </Link>
            <Link to={'/admin/blog/action'}  className='flex gap-1 justify-center md:border border-ternary text-secondary md:py-2  hover:bg-primary/30 hover:border-none cursor-pointer'>
                    <ViewIcon  w={25} h={25} style={'mt-[2.65px]'} />
                    <span className='hidden md:block md:text-lg'>{viewButtonText}</span>
            </Link>
        </div>
    </div>
  )
}

export default RecentBlogHeader