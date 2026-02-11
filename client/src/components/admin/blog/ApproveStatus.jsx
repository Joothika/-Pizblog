import React from 'react'
import { approvedStatusHelper, notApprovedStatusHelper, setApprovedAndNotApprovedPizzas } from '../../../helpers/statusHelper'
import { UsePizzaContext } from '../../../context/PizzaDataContext'
import {GetPizzas} from '../../../hooks/GetPizzas'
import { UseBlogContext } from '../../../context/BlogDataContext'
import { approvedButtonText, notApprovedButtonText } from '../../../assets/constant'

const ApproveStatus = () => {
  const {pizzas} = UsePizzaContext()
  const {setApproved, setNotApproved} = UseBlogContext()
  GetPizzas()
  
  return (
    <div className='grid grid-cols-2 gap-x-5 md:mt-9'>
            <button className='bg-primary text-white cursor-pointer hover:bg-primary/90 md:py-3' onClick={e => setApprovedAndNotApprovedPizzas(e, setApproved, setNotApproved([]), approvedStatusHelper(pizzas))}>{approvedButtonText}</button>
            <button className='bg-ternary/7 text-secondary cursor-pointer  hover:bg-ternary/20 py-2 md:py-3' onClick={e => setApprovedAndNotApprovedPizzas(e, setNotApproved, setApproved([]), notApprovedStatusHelper(pizzas))}>{notApprovedButtonText}</button>
    </div>
  )
}

export default ApproveStatus