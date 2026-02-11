import React from 'react'
import Login from '../../components/admin/Login'
import { UseAuthContext } from '../../context/AuthDataContext'
import { Navigate } from 'react-router'
import { RefreshToken } from '../../hooks/Protected'

const Auth = () => {
  const {token} = UseAuthContext()
  RefreshToken()
  return (
    <>
    {
      token ? <Navigate to={'/admin'} /> : ''
    }
    <Login/>
    </>
  )
}

export default Auth