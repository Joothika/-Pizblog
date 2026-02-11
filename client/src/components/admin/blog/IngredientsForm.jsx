import React from 'react'
import { AddIcon } from '../../../utils/SvgImages'
import { UsePizzaContext } from '../../../context/PizzaDataContext'
import { insertInputBox, insertInputData } from '../../../helpers/addNewBlogHelper'
    

const IngredientsForm = () => {
   const { placeholderIngredientCount, setPlaceholderIngredientCount, addIngredientsBox, setAddIngredientsBox, addIngredients, setAddIngredients} = UsePizzaContext()

   return (
    <div>
        <div className='grid grid-cols-2 mb-2'>
            <label htmlFor="Ingredients" className='text-secondary md:text-md'>Ingredients</label>
            <button onClick={e => insertInputBox(e, placeholderIngredientCount, setPlaceholderIngredientCount,setAddIngredientsBox)}>
                <AddIcon w={22} h={22} style={'justify-self-end cursor-pointer md:mt-2'} />
            </button>
        </div>
       {
        addIngredientsBox?.map(boxIndex => 
        <input type="text" key={boxIndex} value={ addIngredients[boxIndex]} onChange={insertInputData(boxIndex, addIngredients, setAddIngredients)}  placeholder={'ingredient ' + (boxIndex+1)} className='w-full outline-none border border-ternary indent-2 py-1.5 md:py-2 my-2' />)
       }
    </div>
  )
}

export default IngredientsForm