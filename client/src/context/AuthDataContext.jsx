import React, { createContext, useContext, useState } from 'react'


const AuthContext = createContext()
export const AuthDataContext = ({children}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const [subscribedUserText, setSubscribedUserText] = useState('')

    const value = {
        email,
        setEmail,
        password,
        setPassword,
        token, 
        setToken,
        subscribedUserText, 
        setSubscribedUserText
    }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export const UseAuthContext = () => {
    return useContext(AuthContext)
}