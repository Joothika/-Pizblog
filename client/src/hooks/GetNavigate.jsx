import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const GetNavigate = (token) => {
    const navigate = useNavigate()

   useEffect(() => {
     if(token)
        return navigate('/admin')

   }, [navigate, token])

}

export default GetNavigate