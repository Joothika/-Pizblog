import React from 'react'

const commentsByBlogIdHelper = (id, comments) => {
  const commentsByBlogId = comments?.find(comment => comment?.blogId == id && comment?.comments)
  return commentsByBlogId
}

export default commentsByBlogIdHelper