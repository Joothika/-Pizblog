import axios from "axios"

export const getComments = async() => {
    try{
        const fetchComments = await axios.get('/comment')
        return fetchComments?.data?.data
    }catch(e){
        console.log(e.message)
    }
}

export const getCommentsByBlogId = async(id) => {
    try{
        const fetchCommentsByBlogId = await axios.get(`/comment/${id}`)
        return fetchCommentsByBlogId?.data?.data
    }catch(e){
        console.log(e.message)
    }
}

export const addCommentsByBlogId = async(e, id, userName, comment) => {

    e.preventDefault()
    let newComment = {
        userName,
        comment
    }

    try{
        const addCommentByUser = await axios.post(`/comment/${id}`, newComment)
        console.log(addCommentByUser)
    }catch(e){
        console.log(e.message)
    }

}

export const deleteCommentByUserId = async(commentId) => {
    try{
        await axios.delete(`/comment/${commentId}`)
    }catch(e){
        console.log(e.message)
    }
}