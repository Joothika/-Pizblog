import axios from "axios"


export const getRandomText = async() => {
    try{
        const fetchRandomText  = await axios.get('/random-text')
        return fetchRandomText?.data?.data
    }catch(e){
        console.log(e.message)
    }
}