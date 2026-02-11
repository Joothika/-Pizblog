import axios from "axios"


export const getFilter = async() =>{
    try{
        const fetchFilterOptions = await axios.get('/filter')
        return fetchFilterOptions?.data?.data
    }catch(e){
        console.log(e.message)
    }
}