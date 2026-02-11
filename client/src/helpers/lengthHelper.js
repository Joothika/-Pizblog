import React from 'react'
import blogOfDayPizzasHelper from './blogOfDayPizzasHelper'
import { UsePizzaContext } from '../context/PizzaDataContext'
import { approvedStatusHelper } from './statusHelper'
import featuredPizzasHelper from './featuredPizzasHelper'

export const commentsLengthHelper = (id, comments) => {
     const commentsLength = comments?.find(comment => comment?.blogId == id && comment?.comments)?.comments?.length
     return commentsLength
}

export const blogOfDayLengthHelper = (pizzas) => {
    const blogDayLength = blogOfDayPizzasHelper(pizzas)?.length
    return blogDayLength
}

export const featuredLengthHelper = (pizzas) => {
    const featuredLength = featuredPizzasHelper(pizzas)?.length
    return featuredLength
}

export const pizzasLengthHelper = (pizzas) => {
    const pizzasLength = pizzas?.length
    return pizzasLength
}


export const approvedStatusLengthHelper = (pizzas) => {
    const approvedLength = approvedStatusHelper(pizzas)?.length
    return approvedLength
}


export const usersLengthHelper = (comments) => {
    const usersLength = comments?.map(comment => comment?.comments?.length).reduce((acc, curr) => acc + curr, 0)
    return usersLength
}