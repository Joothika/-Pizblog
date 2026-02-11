import React from 'react'
import Cards from '../Cards'
import { UseCardsCountContext } from '../../../context/AdminCardsDataContext'
import { GetAdminDashboardCards } from '../../../hooks/GetDashboardCards'

const CardSection = () => {
  const { adminDashboardCards } = UseCardsCountContext()
  GetAdminDashboardCards()
  
  return (
    <section className='grid max-sm:gap-y-3 md:grid-cols-4 md:gap-x-8 max-sm:mt-6' >
       {
        adminDashboardCards?.map((cardDetail, i) =>  <Cards key={cardDetail?._id} cardDetail={cardDetail} index={i} dashboard sm />)
       }
    </section>
  )
}

export default CardSection