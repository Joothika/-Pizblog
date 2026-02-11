import React from 'react'

const PizzaThumbnail = ({allCss, pizzas}) => {
    const {link, variety} = pizzas
  return (
     <div className={`${!allCss && 'max-sm:mb-5'} relative cursor-pointer`}>
        <div className='absolute hover:bg-secondary/15 w-full h-full'></div>
       <figure>
            <img src={link} alt="" className='w-full h-40 md:h-55 object-cover rounded-md' />
            <figcaption className='bg-primary px-4 text-lg md:px-5 py-1 md:text-sm rounded-full absolute right-3.5 top-3.5 text-white '>{variety}</figcaption>
       </figure>
    </div>
  )
}

export default PizzaThumbnail