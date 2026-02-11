import axios from "axios"


export const getUserCards = async() => {
    try{
        const fetchUserCards = await axios.get('/cards/user')
        return fetchUserCards?.data?.data
    }catch(e){
        console.log(e.message)
    }
}


export const getAdminCards = async() => {
    try{
        const fetchAdminCards = await axios.get('/cards/admin')
        return fetchAdminCards?.data?.data
    }catch(e){
        console.log(e.message)
    }
}


export const getBlogCards = async() => {
    try{
        const fetchBlogCards = await axios.get('/cards/blog')
        return fetchBlogCards?.data?.data
    }catch(e){
        console.log(e.message)
    }
}


export const getCommentCards = async() => {
    try{
        const fetchCommentCards = await axios.get('/cards/comment')
        return fetchCommentCards?.data?.data
    }catch(e){
        console.log(e.message)
    }
}