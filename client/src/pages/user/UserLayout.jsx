import React from 'react'
import Navigation from '../../components/user/Navigation'
import { Outlet } from 'react-router'
import Footer from '../../components/user/Footer'

const UserLayout = () => {
  return (
    <div>
        <Navigation/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default UserLayout