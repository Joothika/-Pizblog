import React from 'react'
import { UseBlogContext } from '../../../context/BlogDataContext'
import { SearchIcon } from '../../../utils/SvgImages'

const SearchBox = () => {
    const {adminSearchText, setAdminSearchText} = UseBlogContext()
    
  return (
      <form className='relative'>
            <input type="search" value={adminSearchText} onChange={(e) => setAdminSearchText(e.target.value)}  placeholder='search by name or id' className='outline-none border border-ternary/30 rounded-sm indent-4 w-full py-2.5 mt-6 md:mt-10' />
            <SearchIcon w={35} h={35} style={'absolute right-4 top-7 md:top-11'} />
      </form>
  )
}

export default SearchBox