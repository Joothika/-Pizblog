import React, { createContext, useContext, useState } from 'react'


const CommentContext = createContext()
export const CommentDataContext = ({children}) => {
  const [comments, setComments] = useState([])
  const [commentsById, setCommentsById] = useState([])
  const [blogOptionId, setBlogOptionId] = useState(null)
  const [commentSearchText, setCommentSearchText] = useState('')
  const [adminSearchedComment, setAdminSearchedComment] = useState([])
  const [userName, setUserName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [userId, setUserId] = useState(null)

  const value = {
    comments,
    setComments,
    commentsById, 
    setCommentsById,
    blogOptionId, 
    setBlogOptionId,
    commentSearchText, 
    setCommentSearchText,
    adminSearchedComment, 
    setAdminSearchedComment,
    userName, 
    setUserName,
    commentText, 
    setCommentText,
    userId, setUserId
  }
  return (
    <CommentContext.Provider value={value}>
        {children}
    </CommentContext.Provider>
  )
}

export const UseCommentContext = () => {
    return useContext(CommentContext)
}