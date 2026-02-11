import axios from "axios"


export const getSubscribedUsers = async() => {
    try{
        const fetchPizzas = await axios.get('/subscribe-user')
        return fetchPizzas?.data?.data
    }catch(e){
        console.log('error:',e.message)
    }

}


export const addSubscribedUsers = async(e,email,setSubscribedUserText) => {
    e.preventDefault()
    try{
        await axios.post('/subscribe-user', {email})
        setSubscribedUserText('')
    }catch(e){
        console.log('error:',e.message)
    }

}