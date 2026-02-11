import React from 'react'
import { AddIcon } from '../../../utils/SvgImages'
import { UsePizzaContext } from '../../../context/PizzaDataContext'
import { insertInputBox, insertInputData } from '../../../helpers/addNewBlogHelper'

const Instructions = () => {
  const {addInstructionsBox, setAddInstructionsBox, addInstructions, setAddInstructions, placeholderInstructionsCount, setPlaceholderInstructionsCount} = UsePizzaContext()

  
  return (
    <>
        <div className='grid grid-cols-2'>
            <label htmlFor="Instructions" className='text-secondary md:text-md max-sm:mb-1'>Instructions</label>
            <button className='justify-self-end cursor-pointer' onClick={e => insertInputBox(e, placeholderInstructionsCount, setPlaceholderInstructionsCount,setAddInstructionsBox)}>
              <AddIcon w={22} h={22} style={'justify-self-end cursor-pointer -mt-3 md:-mt-6'} />
            </button>
        </div>
        {
          addInstructionsBox?.map(boxIndex => <input type="text" key={boxIndex} value={addInstructions[boxIndex]} onChange={insertInputData(boxIndex, addInstructions, setAddInstructions)} id='Instructions' placeholder={'ingrediant ' + (boxIndex+1)} className='w-full outline-none border border-ternary indent-2 py-1.5 md:py-2 mb-1' />)
        }
        </>
  )
}

export default Instructions