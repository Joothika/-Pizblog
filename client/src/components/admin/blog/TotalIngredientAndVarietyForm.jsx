import React from 'react'
import { UsePizzaContext } from '../../../context/PizzaDataContext'
import { UseBlogContext } from '../../../context/BlogDataContext'
import { GetIngredient, GetVariety } from '../../../hooks/GetPizzas'

const TotalIngredientAndVarietyForm = () => {
  const { noIngredients, setNoIngredients, variety, setVariety} = UsePizzaContext()
  const { varietyService, ingredientService } = UseBlogContext()
  GetVariety()
  GetIngredient()
  
  return (
    <div className='grid md:grid-rows-[40px_40px] gap-y-5 md:gap-y-6 mt-3.5 md:mt-2'>
        <div className='grid md:grid-cols-[0.6fr_2fr] align-items-center'>
             <label htmlFor="NoIngredients" className='text-secondary md:text-md max-sm:mb-3'>No of ingredients</label>
             <select name="" id="NoIngredients" className='w-full outline-none border border-ternary h-8 indent-1 text-sm' value={noIngredients} onChange={e => setNoIngredients(e.target.value)}>
                <option  value="choose the no of ingredients">choose the no of ingredients</option>
                {
                  ingredientService?.map((ingredientCount) => <option key={ingredientCount?._id} value={ingredientCount?.noIngredient}>{ingredientCount?.noIngredient}</option>)
                }
             </select>
        </div>
        <div className='grid md:grid-cols-[0.6fr_2fr] align-items-center'>
             <label htmlFor="variety" className='text-secondary md:text-md max-sm:mb-3'>Variety</label>
             <select name="" id="variety" className='w-full outline-none border border-ternary h-8 indent-1 text-sm' value={variety} onChange={e => setVariety(e.target.value)}>
                <option value="choose the no of ingrdiants">choose the pizza variety</option>
                  {
                    varietyService?.map((variety) => <option key={variety?._id} value={variety?.variety}>{variety?.variety}</option>)
                  }
             </select>
        </div>
    </div>
  )
}

export default TotalIngredientAndVarietyForm