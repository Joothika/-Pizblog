import React from 'react'
import { UseCardsCountContext } from '../../../context/AdminCardsDataContext'
import Cards from '../Cards'
import { GetAdminBlogDashboardCards } from '../../../hooks/GetDashboardCards'

const CardSection = () => {
  const { adminBlogCards } = UseCardsCountContext()
  GetAdminBlogDashboardCards()
  return (
     <section className='grid grid-cols-2 md:grid-cols-4 max-sm:gap-y-4 gap-x-3 md:gap-x-8 max-sm:pb-3 max-sm:pt-6'>
       {
        adminBlogCards?.map((cardDetail, i) =>  <Cards key={cardDetail?._id} cardDetail={cardDetail} index={i} blog sm />)
       }
    </section>
  )
}

export default CardSection