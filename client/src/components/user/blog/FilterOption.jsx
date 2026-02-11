import React from 'react'
import { UseBlogContext } from '../../../context/BlogDataContext'
import selectFilterOptionHelper from '../../../helpers/selectFilterOptionHelper'
import { GetFilters } from '../../../hooks/GetFilters'

const FilterOption = () => {
  const { setVariety, setIngredient, filters} = UseBlogContext()
  GetFilters()

  return (
    <div className='grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-y-3 md:gap-x-4 mt-4 md:mt-6'>
                {
                    filters?.map((f, i) => {
                        return(
                            <select key={i} name={f.tag} id={f.tag}className='outline-none bg-ternary/22 py-2 indent-2 rounded-md text-sm' onChange={(e) => selectFilterOptionHelper(e,f, setVariety, setIngredient)}>
                                <option value={f.title}>{f.title}</option>
                                {
                                    f?.options?.map(option => {
                                        return(
                                            <option key={option} value={option}>{option}</option>
                                        )
                                    })
                                }
                            </select>
                        )
                    })
                }
              </div>
  )
}

export default FilterOption