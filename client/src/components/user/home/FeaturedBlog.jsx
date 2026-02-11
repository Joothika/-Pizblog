import React from 'react'
import { featuredBlog } from '../../../assets/constant'
import { UsePizzaContext } from '../../../context/PizzaDataContext';
import PizzaCard from '../PizzaCard';
import { GetFeaturedPizzas } from '../../../hooks/GetPizzas';

const FeaturedBlog = () => {
  const {featuredPizzas} = UsePizzaContext();
  GetFeaturedPizzas()

  return (
    <section className='mx-10 md:mx-25 my-6 md:my-14 font-semibold'>
        <h1 className='text-xl md:text-3xl text-secondary'>{featuredBlog}</h1>
        <PizzaCard noContentRequired featuredCss pizzas={featuredPizzas} />
    </section>
  )
}

export default FeaturedBlog