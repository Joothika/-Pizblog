import React from 'react'

const featuredPizzasHelper = (pizzas) => {
   const filteredFeaturedPizza = pizzas.filter(pizza => pizza.keyword == 'featured')
   return filteredFeaturedPizza
}

export default featuredPizzasHelper