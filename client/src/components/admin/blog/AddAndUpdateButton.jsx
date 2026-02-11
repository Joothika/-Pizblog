import React from 'react'
import { UsePizzaContext } from '../../../context/PizzaDataContext'
import { addButtonText, updateButtonText } from '../../../assets/constant'
import { useParams } from 'react-router'
import { addPizzas, updatePizzasById } from '../../../service/pizzasService'

const AddAndUpdateButton = () => {
  const {id} = useParams()
  const {imageLink,title,slug,noIngredients,
    variety, addIngredients, addInstructions,
    addNutrient,addQuantity, keywords,status} = UsePizzaContext()

  const onHandleClick = (e) => {
    if(id)
        return updatePizzasById(e, id, imageLink, title, slug, addIngredients, noIngredients, variety, addInstructions, keywords, addNutrient, addQuantity, status)
    else
        return addPizzas(e, imageLink, title, slug, addIngredients, noIngredients, variety, addInstructions, keywords, addNutrient, addQuantity, status)
  }

  return (
    <div className='md:justify-self-end'>
        <button onClick={e => onHandleClick(e)} className='bg-linear-to-b from-primary to-secondary text-white cursor-pointer rounded-md py-3 my-4 w-full md:w-42'>{id ? updateButtonText : addButtonText}</button>
    </div>
  )
}

export default AddAndUpdateButton