import React from 'react'
import SearchBox from './SearchBox'
import ApproveStatus from './ApproveStatus'

const SearchAndApproveSection = () => {
  return (
    <section className='grid max-sm:grid-rows-[80px_70px] md:grid-cols-[2fr_1fr] items-center md:gap-x-6'>
        <SearchBox/>
        <ApproveStatus/>
    </section>
  )
}

export default SearchAndApproveSection