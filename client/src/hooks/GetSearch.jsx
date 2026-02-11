import { UseBlogContext } from "../context/BlogDataContext"
import { UseCommentContext } from "../context/CommentDataContext"
import { getSearchCommentedUser, getSearchPizzas } from "../service/searchService"
import { useEffect } from "react"


export const AdminCommentSearch = () => {
    const {commentSearchText, setAdminSearchedComment} = UseCommentContext()

    useEffect(() => {
     const fetchData = async() => {
        const data = await getSearchCommentedUser(commentSearchText)
        console.log(data)
        setAdminSearchedComment(data)
    }
    fetchData()
    
   }, [commentSearchText, setAdminSearchedComment])

}


export const GetSearchedPizzas = () => {
    const {searchText, adminSearchText, setSearchedPizzas, setAdminSearchedPizzas} = UseBlogContext()
    

   useEffect(() => {
     const fetchData = async() => {
        const data = await getSearchPizzas( searchText || adminSearchText )
        if(adminSearchText)
            setAdminSearchedPizzas(data)
        else
            setSearchedPizzas(data)
    }
    fetchData()

   }, [searchText, adminSearchText,setSearchedPizzas, setAdminSearchedPizzas])

}