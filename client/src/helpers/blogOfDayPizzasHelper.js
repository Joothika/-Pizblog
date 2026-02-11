import React from 'react'

const blogOfDayPizzasHelper = (pizzas) => {
  const filteredTodayPizza = pizzas.filter(pizza => pizza.keyword == 'today')
  return filteredTodayPizza
}

export default blogOfDayPizzasHelper