import React from 'react'
import {  logo  } from '../../assets/asset'
import { menu } from '../../assets/svgAssets'
import { Link } from 'react-router'
import { UseAuthContext } from '../../context/AuthDataContext'

const Navigation = () => {

  return (
    <header className='md:grid md:grid-cols-4 content-center max-sm:px-6 max-sm:py-5 md:px-15 md:py-5 '>
        <Link to={'/'}>
          <img src={logo} alt="logo" className='w-20 md:w-32 cursor-pointer ' />
        </Link>
        <nav className='max-sm:bg-white/50 max-sm:z-1 max-sm:fixed bottom-0 left-1 shadow-lg px-9 py-5 gap-20 md:relative md:top-3 md:shadow-none md:col-start-4 md:px-0 md:py-0 grid grid-cols-4 md:gap-x-12 justify-self-center '>
          {
            menu.map((menuItems, index) =>  {
              return(
                <Link key={index} className='cursor-pointer' to={menuItems.path}>
                  <button className='cursor-pointer'>
                  {menuItems?.img}
                  </button>
                </Link>
              )
            })
          }
        </nav>
    </header>
  )
}

export default Navigation