import React from 'react'
import ImageTitleSlugForm from './ImageTitleSlugForm'
import IngredientsForm from './IngredientsForm'
import TotalIngredientAndVarietyForm from './TotalIngredientAndVarietyForm'
import Instructions from './Instructions'
import Nutrients from './Nutrients'
import KeywordAndStatus from './KeywordAndStatus'
import { UpdatePizzasById } from '../../../hooks/GetPizzas'
import AddAndUpdateButton from './AddAndUpdateButton'

const CreatePizzaBlogForm = () => {
  UpdatePizzasById()

  return (
    <form className='grid gap-y-3 md:gap-y-5 md:my-10'>
      <ImageTitleSlugForm/>
      <div className='grid md:grid-cols-2 md:gap-x-14 my-3 md:my-3'>
          <IngredientsForm/>
          <TotalIngredientAndVarietyForm/>
      </div>
      <Instructions/>
      <Nutrients/>
      <KeywordAndStatus/>
      <AddAndUpdateButton/>
    </form>
  )
}

export default CreatePizzaBlogForm