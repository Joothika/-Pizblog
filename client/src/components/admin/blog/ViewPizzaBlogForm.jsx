import React from 'react'
import Table from '../Table'
import { viewBlogTable } from '../../../assets/constant'
import {UsePizzaContext} from '../../../context/PizzaDataContext'
import { UseBlogContext } from '../../../context/BlogDataContext'

const ViewPizzaBlogForm = () => {
  const {pizzas} = UsePizzaContext()
  const {adminSearchedPizzas} = UseBlogContext()
  
  return (
    <Table tableHeadData={viewBlogTable} tableContentData={adminSearchedPizzas?.length == 0 ? pizzas : adminSearchedPizzas} icon />
  )
}

export default ViewPizzaBlogForm