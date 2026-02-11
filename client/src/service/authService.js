import axios from "axios"


export const adminLoginService = async(e , email, password, navigate) => {
    e.preventDefault()
    try{
        const login = await axios.post('/auth/login', {email, password})
        let token = login?.data?.token
        if(token){
            localStorage.setItem('token', token)
            navigate('/admin')
        }

    }catch(e){
        console.log(e.message)
    }
}

export const adminLogoutService = (e, index, token) => {
    if(index == 3)
        localStorage.removeItem('token')
        deleteTokenHeader(token)
}

export const setTokenHeader = (token) => {
    if(token){
        axios.defaults.headers.common['Authorization'] = `${token}`
    }
}

export const deleteTokenHeader = (token) => {
    if(token)
         delete axios.defaults.headers.common['Authorization']
}