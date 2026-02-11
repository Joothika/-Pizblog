import React from 'react'
import CardSection from '../../components/admin/blog/CardSection'
import SearchAndApproveSection from '../../components/admin/blog/SearchAndApproveSection'
import RecentBlogs from '../../components/admin/blog/RecentBlogs'

const AdminBlog = () => {
  return (
    <>
      <CardSection/>
      <SearchAndApproveSection/> 
      <RecentBlogs/> 
    </>
  )
}

export default AdminBlog