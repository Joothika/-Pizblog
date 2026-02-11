import React from 'react'
import FilterButton from './FilterButton'
import FilterOption from './FilterOption'
import { filter } from '../../../assets/constant'

const Filters = () => {
  return (
     <form className='mx-auto bg-white rounded-lg shadow-lg -mt-32 md:-mt-36 mb-20 w-4/5 md:w-1/2 px-5 md:px-7 py-4 md:py-6'>
          <label htmlFor="" className='text-secondary text-lg md:text-xl'>{filter}</label>  
          <FilterOption/>
          <FilterButton/>
    </form>
  )
}

export default Filters