import React from 'react'
import { nutrientHeaderText } from '../../../assets/constant'
import { UsePizzaContext } from '../../../context/PizzaDataContext'

const Nutrients = () => {
  const {viewPizzaById} = UsePizzaContext()
  
  return (
    <div className='mb-6 md:mb-0 md:py-10'>
      <h2 className='text-secondary text-xl md:text-2xl'>{nutrientHeaderText}</h2>
      <table className='border-ternary/4 border-separate border-spacing-[0.2rem] my-5 md:my-6'>
        <thead className='text-white md:text-xl'> 
          <tr>
            <td className='bg-secondary border w-60 indent-3 md:pr-100 py-2 md:py-3'>Nutrients</td>
            <td className='bg-secondary border text-center w-25 md:px-5 py-2 md:py-3'>Quantity</td>
          </tr>
        </thead>
        <tbody>
          {
            viewPizzaById?.nutrition?.map((nutrition,i) => {
              return(
                <tr className='bg-ternary/20 md:text-lg' key={i}>
                  <td className=' py-2 md:py-3 indent-3'>{nutrition?.nutrient?.charAt(0)?.toUpperCase() + nutrition?.nutrient?.slice(1)}</td>
                  <td className='text-center'>{nutrition?.quantity}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Nutrients