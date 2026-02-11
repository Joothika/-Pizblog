import React from 'react'
import PizzaCard from '../PizzaCard'
import { UsePizzaContext } from '../../../context/PizzaDataContext'
import { UseBlogContext } from '../../../context/BlogDataContext'
import NotFound from '../NotFound'
import { GetApprovedPizzas } from '../../../hooks/GetPizzas'

const BlogList = () => {
  const { variety, ingredient, notFound} = UseBlogContext() 
  const {approvedPizzas, filteredPizzas} = UsePizzaContext()
  GetApprovedPizzas()

  return (
    <>
      {
        notFound == 'not found' &&
        <NotFound/>
      }
      
        <PizzaCard allCss pizzas={filteredPizzas?.length == 0 && !variety && !ingredient ?  approvedPizzas : filteredPizzas }/> 
      
    </>
  )
}

export default BlogList