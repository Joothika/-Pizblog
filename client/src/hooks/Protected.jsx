import React, { useEffect } from 'react'
import { UseAuthContext } from '../context/AuthDataContext'
import { useNavigate } from 'react-router'
import { setTokenHeader } from '../service/authService'



export const RefreshToken = () => {
    const navigate = useNavigate()
    const {setToken} = UseAuthContext()
    const tokenFromStorage = localStorage.getItem('token')

    useEffect(() => {
        if(tokenFromStorage)
            setToken(tokenFromStorage)
            setTokenHeader(tokenFromStorage)
        
        if(!tokenFromStorage)
            navigate('/auth/login')

    },[setToken, tokenFromStorage, navigate])

}

