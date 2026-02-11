import React from 'react'
import { profile } from '../../../assets/svgAssets'
import { noComments } from '../../../assets/constant'
import { UseCommentContext } from '../../../context/CommentDataContext'

const CommentList = () => {
  const {commentsById} = UseCommentContext()
  

  return (
    <div className='col-start-1 col-end-3'>
        <ul className='my-4 md:my-3'>
          {
            commentsById?.length == 0 && <h3 className="text-ternary/80 text-center my-10 text-sm md:text-[1.2rem]">{noComments}</h3>
          }
          {
                  commentsById?.map((comment,i) => 
                    {
                      return(
                        <div key={i}>
                          <li className='grid grid-cols-[20px_1fr_1fr] gap-x-1'>
                            <span className=' md:mt-1'>{profile}</span>
                            <span className='text-secondary text-md md:text-lg'>{comment?.userName?.charAt(0)?.toUpperCase() + comment?.userName?.slice(1)}</span>
                            <span className='text-ternary text-xs mt-1 justify-self-end'>{comment?._id}</span>
                          </li>
                          <li className='text-ternary mt-1 md:mt-1.5'>{comment?.comment?.charAt(0)?.toUpperCase() + comment?.comment?.slice(1)}</li>
                          <hr className='text-ternary/50 my-2 md:my-3' />
                        </div>
                      )
                    }
                  )
          }
        </ul>
    </div>
  )
}

export default CommentList