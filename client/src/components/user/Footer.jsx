import React from 'react'
import { logo } from '../../assets/asset'
import { logoSubtext } from '../../assets/constant'
import { socialMedia } from '../../assets/svgAssets'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className='bg-linear-to-r from-primary/6 to-secondary/6 pt-8 pb-25  px-4 md:px-0 mt-10 md:mt-20 md:pt-2 md:pb-4'>
        <div className=' md:grid md:grid-cols-4 md:pl-30 md:py-10'>
            <div>
                <img src={logo} alt="logo" className='w-32 md:w-35' />
                <p className='ml-5 mt-4 text-lg md:text-md md:ml-6 md:mt-3 text-ternary'>{logoSubtext}</p>
            </div>
            <div className='mt-7 md:mt-0 md:col-start-3 px-4 md:px-0'>
                <ul className='grid grid-cols-7 text-sm md:text-lg  justify-items-center md:gap-x-20 md:mt-4 text-secondary'>
                    <Link to={'/'}>
                        <li className='hover:text-primary cursor-pointer'>Home</li>
                    </Link>
                    <li>|</li>
                    <Link to={'/blog'}>
                        <li className='hover:text-primary cursor-pointer'>Blog</li>
                    </Link>
                    <li>|</li>
                    <Link to={'/search'}>
                        <li className='hover:text-primary cursor-pointer'>Search</li>
                    </Link>
                    <li>|</li>
                    <Link to={'/auth/login'}>
                        <li className='hover:text-primary cursor-pointer'>Login</li>
                    </Link>
                </ul>
                <div className='grid mt-7 grid-cols-[50px_50px_50px] md:grid-cols-3 md:absolute md:right-27 md:gap-x-12 md:mt-12'>
                    {
                        socialMedia?.map((icon) => <span key={icon?.alt}>{icon?.link}</span>)
                    }
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer