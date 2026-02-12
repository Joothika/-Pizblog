import React from 'react'
import {Link} from 'react-router'
import PizzaThumbnail from './PizzaThumbnail'
import PizzaThumbnailContent from './PizzaThumbnailContent'
import {GetPizzas, GetTodayPizzas} from '../../hooks/GetPizzas'

const PizzaCard = ({noContentRequired, featuredCss, allCss, pizzas}) => {

   GetPizzas()
   GetTodayPizzas()
   return (
    <div className={`grid  ${featuredCss ? 'grid-cols-2 grid-rows-auto gap-x-4 md:grid-cols-4 md:grid-rows-2 md:gap-x-6 md:gap-y-6 mt-6 md:mt-16' : `${allCss ? 'md:grid-cols-2 mx-10 md:mx-45 mt-25 md:mt-30 gap-y-6 md:gap-x-11 md:gap-y-8' : 'grid-cols-1 md:grid-cols-3 md:gap-x-13 md:gap-y-12 mt-6 md:mt-18'}`}`}>
        {
          pizzas?.map((pizza, i) => {
            return(
             <Link to={`/blog/${pizza._id}`} key={pizza?._id} className={`${allCss && 'border border-ternary/20 shadow-md'} ${featuredCss && i == 5 && 'col-span-2'} ${featuredCss && i == 0  ? 'max-sm:mb-4 col-span-2 md:col-span-2' : 'max-sm:mb-4'}   cursor-pointer`}>
               <div>
                  <PizzaThumbnail allCss pizzas={pizza} />
                  {!noContentRequired && <PizzaThumbnailContent allCss pizzas={pizza} />}
              </div> 
             </Link>
            )
          })
        } 
     
    </div>
  )
}

export default PizzaCard
