import React from 'react'
import Table from '../Table'
import { commentBlogTable, commentTableHeaderText } from '../../../assets/constant'
import { UseCommentContext } from '../../../context/CommentDataContext'
import { GetCommentById } from '../../../hooks/GetComments'

const CommentTable = () => {
  const {commentsById, blogOptionId, commentSearchText, adminSearchedComment} = UseCommentContext()
  GetCommentById(blogOptionId)

  return (
    <section className=' my-6 md:my-8'>
      <h2 className='text-lg md:text-xl text-secondary mb-4 md:mb-5'>{commentTableHeaderText}</h2>
      <Table tableHeadData={commentBlogTable} tableContentData={ commentSearchText == ''  ? commentsById : adminSearchedComment} icon noEdit />
    </section>
  )
}

export default CommentTable