import React, { useEffect } from 'react'
import { UseBlogContext } from '../context/BlogDataContext'
import { getFilter } from '../service/filterService'

export const GetFilters = () => {
  const {setFilters} = UseBlogContext()

  useEffect(() => {
        const fetchData = async() => {
            const data = await getFilter()
            setFilters(data)
        }
        fetchData()

  }, [setFilters])
}

