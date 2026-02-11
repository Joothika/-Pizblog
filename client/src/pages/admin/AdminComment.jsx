import React from 'react'
import CardSection from '../../components/admin/comments/CardSection'
import CommentTable from '../../components/admin/comments/CommentTable'
import SearchBox from '../../components/admin/comments/SearchBox'

const AdminComment = () => {
  return (
    <div>
      <CardSection/>
      <SearchBox/>
      <CommentTable/>
    </div>
  )
}

export default AdminComment