import React from 'react'
import { UsePizzaContext } from '../context/PizzaDataContext'

export const approvedStatusHelper = (pizzas) => {
  const approvedStatus =  pizzas?.filter(pizza => pizza?.status == 'A')
  return approvedStatus
}


export const notApprovedStatusHelper = (pizzas) => {
  const notApprovedStatus =  pizzas?.filter(pizza => pizza?.status == 'NA')
  return notApprovedStatus
}


export const setApprovedAndNotApprovedPizzas = (e, setState, setAnotherStatusEmpty, data) => {
  e.preventDefault()
  setState(data)
  setAnotherStatusEmpty([])
  console.log('working.....')
}