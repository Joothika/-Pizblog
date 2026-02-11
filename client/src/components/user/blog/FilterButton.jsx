import React from 'react'
import { apply } from '../../../assets/constant'
import { UseBlogContext } from '../../../context/BlogDataContext'
import { UsePizzaContext } from '../../../context/PizzaDataContext'
import filterPizzasHelper from '../../../helpers/filterPizzasHelper'

const FilterButton = () => {
    const { variety, ingredient, setNotFound} = UseBlogContext() 
    const {pizzas, setFilteredPizzas} = UsePizzaContext()

  return (
    <div className='grid  mt-4 md:mt-5'>
        <button className='bg-linear-to-b from-primary to-secondary text-white rounded-md cursor-pointer justify-self-end w-25 px-7 md:px-0 py-2 md:py-1.5 md:col-start-5 text-xs md:text-sm' onClick={(e) => 
          filterPizzasHelper(e, variety, ingredient, setNotFound, pizzas, setFilteredPizzas)
        }>{apply}</button>
    </div>
  )
}

export default FilterButton