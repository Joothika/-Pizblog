import React from 'react'
import { UseBlogContext } from '../../../context/BlogDataContext'

const SearchBox = () => {
  const {searchText, setSearchedText} = UseBlogContext()
  
  return (
    <form className='relative  md:mt-5'>
        <input type="search" value={searchText} onChange={(e) => setSearchedText(e.target.value)}   className='outline-none border-2 border-primary rounded-md indent-2 w-3/4 md:w-1/2 py-2 md:py-4 mt-6 md:mt-10'/>
    </form>
  )
}

export default SearchBox