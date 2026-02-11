import React from 'react'
import { dateHelper } from '../../helpers/dateHelper'

const PizzaThumbnailContent = ({allCss, pizzas}) => {
    const {title, createdAt} = pizzas
    
  return (
    <div className={`${allCss && 'px-2 md:px-4 py-2'} grid grid-cols-3 gap-x-3 md:gap-x-2 my-Z`}>
        <h3 className={`${allCss ? 'text-md md:text-lg' : 'max-sm:text-xl'} font-normal text-left col-start-1 col-end-3 `}>{title?.charAt(0)?.toUpperCase() + title?.slice(1)}</h3>
        <button className='border border-primary col-start-3 md:text-sm font-normal h-6 align-self-center max-sm:text-[0.8rem]'>{dateHelper('userBlog',new Date(createdAt))}</button>
    </div>
  )
}

export default PizzaThumbnailContent