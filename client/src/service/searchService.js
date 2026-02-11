import axios from "axios"


export const getSearchPizzas = async(searchText) => {
    try{
        const fetchSearchedPizzas = await axios.post('/search', {searchText })
        return fetchSearchedPizzas?.data?.data
    }catch(e){
        console.log(e.message)
    }
}


export const getSearchCommentedUser = async(id) => {
    try{
        const fetchSearchedUser = await axios.get(`/search/user/${id}`)
        return fetchSearchedUser?.data?.data
    }catch(e){
        console.log(e.message)
    }
}