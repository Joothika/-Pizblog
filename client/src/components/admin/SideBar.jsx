import React from 'react'
import { pizza_logo } from '../../assets/asset'
import { adminMenu } from '../../assets/svgAssets'
import { adminLogoText } from '../../assets/constant'
import { Link } from 'react-router'
import { UseAuthContext } from '../../context/AuthDataContext'
import { adminLogoutService } from '../../service/authService'

const SideBar = () => {
  const {token} = UseAuthContext()

  return (
      <header className='md:fixed md:justify-items-center md:w-20 md:h-screen bg-white md:shadow-xl max-sm:px-5 max-sm:pt-6 md:py-8 '>
            <figure className='max-sm:flex align-items-center'>
                <img src={pizza_logo} alt="logo"  className='w-10 md:w-8 ' />
                <figcaption className='text-secondary md:text-sm max-sm:text-lg max-sm:mt-1'>{adminLogoText}</figcaption>
            </figure>
            <nav className='max-sm:bg-white/50 max-sm:z-1 max-sm:fixed bottom-0 left-1 shadow-lg px-9 py-5 gap-20 md:relative md:top-3 md:shadow-none md:px-0 md:py-0 grid grid-cols-4 md:grid-cols-none md:grid-rows-[20px_20px_20px_20px] md:mt-15 justify-items-center'>
                {
                    adminMenu.map((menuItems, index) =>  {
                    return(
                        <Link key={index} to={menuItems?.path}>
                            <button className='cursor-pointer' onClick={(e) => adminLogoutService(e,index,token)}>
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

export default SideBar