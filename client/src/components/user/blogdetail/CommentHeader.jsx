import React from 'react'
import { comment } from '../../../assets/svgAssets'
import { UseCommentContext } from '../../../context/CommentDataContext'
import { commentHeaderText } from '../../../assets/constant'

const CommentHeader = () => {
  const {commentsById} = UseCommentContext()
    
  return (
                <ul className='flex align-items-center cursor-pointer'>
                    <li className='mt-1'>{comment}</li>
                    <li className='ml-2 text-lg text-primary'>{commentHeaderText}</li>
                    <li className='text-sm mt-1 ml-1'>({commentsById?.length})</li>
                </ul>
  )
}

export default CommentHeader