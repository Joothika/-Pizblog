import React from 'react'
import Ingredients from './Ingredients'
import Steps from './Steps'
import Nutrients from './Nutrients'

const MainContent = () => {

  return (
    <section className='grid md:grid-cols-[300px_1fr] md:grid-rows-[auto] md:gap-x-20'>
        <Ingredients/>
        <Steps/>
        <Nutrients/>
    </section>
  )
}

export default MainContent