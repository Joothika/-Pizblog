import React from 'react'
import { UseBlogContext } from '../../../context/BlogDataContext'
import { blogHeaderText } from '../../../assets/constant'
import {GenerateRandomText} from '../../../hooks/GetRandomText'

const HeroContent = () => {
  const { randomText } = UseBlogContext()
  GenerateRandomText()

  return (
     <div className='bg-linear-to-b from-secondary/34 to-primary/34 text-center h-70 md:h-100 py-8 md:py-15 px-5'>
        <h1 className='text-center font-semibold text-white text-3xl md:text-5xl'>{blogHeaderText}</h1>
        <p className='text-primary text-xl md:text-3xl mt-4 md:mt-7'>{randomText}</p>
    </div>
  )
}

export default HeroContent