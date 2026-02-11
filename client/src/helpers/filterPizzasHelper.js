import React from 'react'

const filterPizzasHelper = (e, variety, ingredient, setNotFound, pizzas, setFilteredPizzas) => {

    e.preventDefault()

    let filtered =  pizzas.filter(pizza => pizza.variety.includes(variety) && pizza.noIngredients == ingredient)

    setFilteredPizzas(filtered)

    if(variety && ingredient && filtered?.length != 0){
          setNotFound('')
    }else{
          setNotFound('not found')
    }
    
}

export default filterPizzasHelper