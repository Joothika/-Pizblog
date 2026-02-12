import React from 'react'
import HeroContent from './HeroContent'
import Filters from './Filters'

const HeroSection = () => {

  return (
    <section className=" bg-[url('/blogPageThumbnail.png')] bg-center h-70 md:h-100 ">
        <HeroContent/>
        <Filters/>
    </section>
  )
}

export default HeroSection



