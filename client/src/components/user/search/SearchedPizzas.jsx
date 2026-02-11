import React from 'react'
import PizzaCard from '../PizzaCard'
import { UseBlogContext } from '../../../context/BlogDataContext'
import StartSearch from './StartSearch'
import { GetSearchedPizzas } from '../../../hooks/GetSearch'
import NotFound from '../NotFound'

const SearchedPizzas = () => {
  const {searchText, searchedPizzas} = UseBlogContext()
  GetSearchedPizzas()
  
  return (
    <section className='md:my-6'>
        <h2 className='text-ternary text-2xl md:text-3xl mx-10 md:mx-35 mt-10 md:mt-20'>Your search results...</h2>
        { !searchText && <StartSearch/> }
        {searchedPizzas?.length == 0 && searchText && <NotFound/>}
        {searchedPizzas?.length  && searchText != '' && <PizzaCard allCss pizzas={searchedPizzas} />}
    </section>
  )
}

export default SearchedPizzas