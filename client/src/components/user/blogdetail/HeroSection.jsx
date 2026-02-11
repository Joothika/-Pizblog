import React from 'react'
import { UsePizzaContext } from '../../../context/PizzaDataContext'
import { dateHelper } from '../../../helpers/dateHelper'

const HeroSection = () => {
    const {viewPizzaById} = UsePizzaContext()

    return (
    <section className='grid text-center gap-y-4 md:gap-y-8 my-8 md:my-15'>
        <span className='text-secondary text-xs md:text-xl '>{viewPizzaById?.slug}</span>
        <h1 className='font-semibold text-4xl md:text-6xl '>{viewPizzaById?.title?.charAt(0)?.toUpperCase() + viewPizzaById?.title?.slice(1)}</h1>
        <span className='border border-primary mx-auto max-sm:text-[0.8rem] md:text-lg h-6 md:h-8 w-1/3 md:w-1/6 my-4 md:my-6'>{dateHelper('userBlog', new Date(viewPizzaById?.createdAt))}</span>
        <img src={viewPizzaById?.link} alt={viewPizzaById?.title} className='w-full' />

    </section>
  )
}

export default HeroSection