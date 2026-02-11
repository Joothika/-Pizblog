import React from 'react'
import { downArrow } from '../../../assets/asset'
import SearchBox from './SearchBox'
import { searchHeroText, searchHighlight } from '../../../assets/constant'

const HeroSection = () => {
  return (
    <section className='text-center my-6 md:my-12'>
        <h1 className='text-3xl mt-4 leading-10 font-semibold md:text-6xl md:mt-6 md:leading-20'><span className='text-primary'>{searchHighlight}</span> {searchHeroText}</h1>
        <SearchBox/>
        <img src={downArrow} alt="down arrow" className='mx-auto w-13 md:w-20 mt-8 md:mt-16' />
    </section>
  )
}

export default HeroSection