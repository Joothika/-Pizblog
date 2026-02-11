import React from 'react'
import { UsePizzaContext } from '../../../context/PizzaDataContext'
import { ingredientHeaderText, noOfIngredientText } from '../../../assets/constant'

const Ingredients = () => {
  const {viewPizzaById} = UsePizzaContext()

  return (
    <div>
        <h2 className='text-secondary text-xl md:text-2xl '>{ingredientHeaderText}</h2>
        <div className='grid grid-cols-[1fr_100px] my-5 md:my-10 text-lg md:text-xl'>
            <h4 className='text-ternary/80 '>{noOfIngredientText}</h4>
            <p className='justify-self-end '>{viewPizzaById?.ingredients?.length}</p>
        </div>
        <ul>
          {
            viewPizzaById?.ingredients?.map((ingredient, i) => <li className='odd:bg-ternary/5 even:bg-primary/10 px-5 md:px-5 py-3 md:py-2 mb-2 md:mb-2 text-lg' key={i}>{ingredient?.charAt(0)?.toUpperCase() + ingredient?.slice(1)}</li> )
          }   
            
        </ul>
    </div>
  )
}

export default Ingredients