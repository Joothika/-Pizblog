import React from 'react'
import { UseCommentContext } from '../../../context/CommentDataContext'
import { SearchIcon } from '../../../utils/SvgImages'

const SearchBox = () => {
  const {commentSearchText, setCommentSearchText} = UseCommentContext()
  return (
          <form className='relative grid max-sm:grid-rows-[80px]'>
                <input type="search" value={commentSearchText} onChange={(e) => setCommentSearchText(e.target.value)}  placeholder='search by user id' className='outline-none border border-ternary/30 rounded-sm indent-4 w-full py-2.5 mt-6 md:mt-10' />
                <SearchIcon w={35} h={35} style={'absolute right-4 top-7 md:top-11'} />
          </form>
  )
}

export default SearchBox