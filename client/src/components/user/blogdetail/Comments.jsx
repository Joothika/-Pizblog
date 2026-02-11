import React from 'react'
import CommentHeader from './CommentHeader'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import {GetCommentById, GetComments} from '../../../hooks/GetComments'
import { useParams } from 'react-router'

const Comments = () => {
  const {id} = useParams()
  GetComments()
  GetCommentById(id)
  
  
  return (
    <section className='my-4 md:my-6'>
        <CommentHeader/>
        <div className='grid md:grid-cols-3 md:gap-x-14 mt-6 md:mt-8'>
            <CommentList/>
            <CommentForm/>
        </div>        
    </section>
  )
}

export default Comments