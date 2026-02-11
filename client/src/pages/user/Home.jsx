import React from 'react'
import HeroSection from '../../components/user/home/HeroSection'
import CountCard from '../../components/user/home/CountCard'
import BlogOfDay from '../../components/user/home/BlogOfDay'
import FeaturedBlog from '../../components/user/home/FeaturedBlog'
import SubscribeBox from '../../components/user/home/SubscribeBox'
import { GetPizzas } from '../../hooks/GetPizzas'

const Home = () => {
   GetPizzas()
  return (
    <>
    <HeroSection/>
    <CountCard/>
    <BlogOfDay/>
    <FeaturedBlog/>
    <SubscribeBox/>
    </>
  )
}

export default Home