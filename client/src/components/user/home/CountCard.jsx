import React from 'react'
import { UseCardsCountContext } from '../../../context/AdminCardsDataContext'
import { GetUserDashboardCards } from '../../../hooks/GetDashboardCards'

const CountCard = () => {
    const { userDashboardCards } = UseCardsCountContext()
    GetUserDashboardCards()
    
  return (
    <section className='grid grid-cols-2 justify-items-center mx-8 md:mx-28 my-12 md:my-20'> 
        {
            userDashboardCards?.map((cc,i) => {
                return(
                    <div key={i} className='bg-linear-to-b from-primary/2 to-secondary/6 px-14 py-5 md:px-45 md:py-13 rounded-md align-self-center'>
                        <strong className='text-4xl md:text-6xl md:ml-8 text-primary'>{cc?.count}</strong>
                        <h4 className='text-ternary font-semibold text-[0.6rem] mt-1 md:mt-3 md:text-lg'>{cc?.title}</h4>
                    </div>
                )
            })
        }
        
        
    </section>
  )
}

export default CountCard