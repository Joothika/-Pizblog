import React from 'react'
import Table from '../Table'
import { recentBlogTable } from '../../../assets/constant'
import {UsePizzaContext} from '../../../context/PizzaDataContext'
import { UseBlogContext } from '../../../context/BlogDataContext'

const RecentBlogTable = () => {
  const {recentPizzas} = UsePizzaContext()
  const {approved,notApproved, adminSearchedPizzas, adminSearchText} = UseBlogContext()

  return (
    <>
      {approved?.length != 0 && notApproved?.length == 0 && <Table tableHeadData={recentBlogTable} tableContentData={approved} />}
      {notApproved?.length != 0 && approved?.length == 0 && <Table tableHeadData={recentBlogTable} tableContentData={notApproved} />}
      {approved?.length == 0 && notApproved?.length == 0 && <Table tableHeadData={recentBlogTable} tableContentData={adminSearchText == '' ? recentPizzas : adminSearchedPizzas } />}
    </>
  )
}

export default RecentBlogTable