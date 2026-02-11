import React from 'react'
import HeroSection from '../../components/user/blog/HeroSection'
import BlogList from '../../components/user/blog/BlogList'
import { GetPizzas } from '../../hooks/GetPizzas'

const Blog = () => {
  GetPizzas()
  return (
    <>
      <HeroSection/>
      <BlogList/>
    </>
  )
}

export default Blog