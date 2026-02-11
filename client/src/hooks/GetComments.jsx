import React, { useEffect } from 'react'
import { UseCommentContext } from '../context/CommentDataContext'
import { UsePizzaContext } from '../context/PizzaDataContext'
import { GetPizzas } from './GetPizzas'
import {  deleteCommentByUserId, getComments, getCommentsByBlogId } from '../service/commentsService'

export const GetComments = () => {
  const {setComments} = UseCommentContext()


  useEffect(() => {
    const fetchData = async() => {
        const data = await getComments()
        setComments(data)
    }
    fetchData()
  },[setComments])
}

export const GetCommentById = (id) => {
  const { setCommentsById, blogOptionId, setBlogOptionId} = UseCommentContext()
  const {pizzas} = UsePizzaContext()
  GetPizzas()

  useEffect(() => {
      if(blogOptionId == null)  setBlogOptionId(pizzas[0]?._id) 

      const fetchData = async() => {
        const data = await getCommentsByBlogId(id)
        setCommentsById(data)
      }
      fetchData()

    } ,[setCommentsById, id, blogOptionId, setBlogOptionId, pizzas])
}

export const DeleteCommentByUserId = () => {
    const {userId} = UseCommentContext()

  useEffect(() => {
    console.log('get comment', userId)
      const deleteData = async() => {
        await deleteCommentByUserId(userId)
      }
      deleteData()
      
  },[userId])

}


