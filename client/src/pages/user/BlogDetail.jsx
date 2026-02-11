import React from 'react'
import { UsePizzaContext } from '../../context/PizzaDataContext'
import HeroSection from '../../components/user/blogdetail/HeroSection'
import MainContent from '../../components/user/blogdetail/MainContent'
import Comments from '../../components/user/blogdetail/Comments'
import { useParams } from 'react-router'
import { GetPizzaById } from '../../hooks/GetPizzas'

const BlogDetail = () => {
  const {id} = useParams()
  GetPizzaById(id)

  return (
    <div className='mx-10 md:mx-60'>
        <HeroSection />
        <MainContent/>
        <hr className='text-ternary/40' />
        <Comments/>
    </div>
  )
}

export default BlogDetail