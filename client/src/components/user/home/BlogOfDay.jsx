import React from 'react'
import { blogOfDay } from '../../../assets/constant'
import { UsePizzaContext } from '../../../context/PizzaDataContext'
import PizzaCard from '../PizzaCard'
import { GetTodayPizzas } from '../../../hooks/GetPizzas'

const BlogOfDay = () => {
  const {todayPizzas} = UsePizzaContext();
  GetTodayPizzas()
  
  return (
    <section className='mx-10 md:mx-25 my-1 md:my-18 font-semibold'>
        <h1 className='text-xl md:text-3xl text-secondary'>{blogOfDay}</h1>
        <PizzaCard noContentRequired pizzas = {todayPizzas}/>
    </section>
  )
}

export default BlogOfDay