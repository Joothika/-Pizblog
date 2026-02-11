import React from 'react'
import { stepHeaderText } from '../../../assets/constant'
import { tick } from '../../../assets/asset'
import { UsePizzaContext } from '../../../context/PizzaDataContext'
import { GetPizzaById } from '../../../hooks/GetPizzas'

const Steps = () => {
  const {viewPizzaById} = UsePizzaContext()
  
  return (
    <div className='my-7 md:my-0'>
        <h2 className='text-secondary text-xl md:text-2xl'>{stepHeaderText}</h2>
        <ul className='my-5 md:my-7'>
            {
              viewPizzaById?.instructions?.map((instruction, i) => {
                return(
                  <li className='grid grid-cols-[25px_1fr] gap-1.5 md:gap-2 mb-4 md:mb-5'>
                    <img src={tick} alt="tick" className=' mt-0.5 w-5.5 md:w-6' />
                    <span key={i}>{instruction}</span>
                  </li>
                )
              })
            }         
        </ul>
    </div>
  )
}

export default Steps