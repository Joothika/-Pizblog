import React from 'react'
import { send } from '../../../assets/svgAssets'
import { sendText } from '../../../assets/constant'
import { addComment } from '../../../assets/constant'
import { UseCommentContext } from '../../../context/CommentDataContext'
import {useParams} from 'react-router'
import { addCommentsByBlogId } from '../../../service/commentsService'
const CommentForm = () => {
  const {id} = useParams()
  const {userName, setUserName, commentText, setCommentText} = UseCommentContext()

  return (
    <div className='my-6 md:my-2'>
        <h3 className='text-ternary'>{addComment}</h3>
        <form className='md:col-start-3 mt-3 md:mt-4 '>
            <input type="text" value={userName} onChange={e => setUserName(e.target.value)} className='border border-ternary/50 w-full indent-2 outline-none h-10' placeholder='your name' />
            <textarea value={commentText} onChange={e => setCommentText(e.target.value)}  rows={5} className='border border-ternary/50 w-full indent-2 outline-none mt-2 md:mt-3 py-1 md:py-2 ' placeholder='add your comment here....'></textarea>
            <button onClick={e => addCommentsByBlogId(e, id, userName, commentText)}  className='grid shadow-lg shadow-primary/30 cursor-pointer rounded-md justify-self-end text-primary hover:bg-primary/10 px-4 md:px-4   py-2 grid-cols-[20px_50px]'>
                <span className='mt-1'>{send}</span>
                <span>{sendText}</span>
            </button>
        </form>
    </div>
  )
}

export default CommentForm