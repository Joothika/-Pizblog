import React from 'react'
import Cards from './Cards'
import {GetPizzas} from '../../../hooks/GetPizzas'
import { GetComments} from '../../../hooks/GetComments'
import { AdminCommentSearch } from '../../../hooks/GetSearch'

const CardSection = () => {  
      GetPizzas()
      GetComments()
      AdminCommentSearch()
  return (
    <section  className='grid md:grid-cols-2 max-sm:gap-y-4 gap-x-3 md:gap-x-8 max-sm:pb-3 max-sm:pt-6'>
        <Cards/>
    </section>
  )
}

export default CardSection