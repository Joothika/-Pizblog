import React from 'react'
import {Link} from 'react-router'
import { heroButtonText, heroSubtext, highlight1, highlight2, pizzaLovers } from '../../../assets/constant'

const HeroSection = () => {
  return (
    <section className='text-center my-4 md:my-12'>
      <span className='font-secondary font-bold border px-3 py-1 md:px-4 md:py-2 rounded-full text-secondary border-primary text-[0.7rem] md:text-[1rem]'>{pizzaLovers}</span>
      <h1 className='text-3xl mt-4 leading-10 font-semibold md:text-6xl md:mt-6 md:leading-20'>Make a your <span className='font-semibold text-primary'>{highlight1}</span> <br /> with <span className='font-semibold text-primary'>{highlight2}</span></h1>
      <p className='text-ternary mt-3 text-xs md:text-lg md:mt-7'>{heroSubtext}</p>
      <Link to={'/blog'}>
        <button className='bg-linear-to-b from-primary to-secondary text-white px-7 py-2.5 text-xs mt-6 md:text-lg md:px-12 md:py-3 md:mt-10 rounded-lg cursor-pointer'>{heroButtonText}</button>
      </Link>
    </section>
  )
}

export default HeroSection