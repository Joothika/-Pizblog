import React, { createContext, useContext, useState } from 'react'

const BlogContext = createContext()

export const BlogDataContext = ({children}) => {
  const [blogSubText, setBlogSubText] = useState([])
  const [randomText, setRandomText] = useState('')
  const [filters, setFilters] = useState([])
  const [variety, setVariety] = useState('')
  const [ingredient, setIngredient] = useState(null)
  const [varietyService, setVarietyService] = useState([])
  const [ingredientService, setIngredientService] = useState([])
  const [keywordsService, setKeywordsService] = useState([])
  const [nutrientService, setNutrientService] = useState([])
  const [searchText, setSearchedText] = useState('')
  const [searchedPizzas, setSearchedPizzas] = useState([])
  const [adminSearchedPizzas, setAdminSearchedPizzas] = useState([])
  const [adminSearchText, setAdminSearchText] = useState('')
  const [notFound, setNotFound] = useState('')
  const [approved, setApproved] = useState([])
  const [notApproved, setNotApproved] = useState([])
    
      const value  = {
          blogSubText,
          setBlogSubText,
          randomText, 
          setRandomText,
          variety, 
          setVariety,
          filters, 
          setFilters,
          ingredient,
          setIngredient,
          varietyService, setVarietyService,
          ingredientService, setIngredientService,
          keywordsService, setKeywordsService,
          nutrientService, setNutrientService,
          searchText, 
          setSearchedText,
          adminSearchedPizzas, 
          setAdminSearchedPizzas,
          searchedPizzas, 
          setSearchedPizzas,
          adminSearchText, 
          setAdminSearchText,
          notFound, 
          setNotFound,
          approved, 
          setApproved,
          notApproved, 
          setNotApproved,
      }
    return (
      <BlogContext.Provider value={value}>
          {children}
      </BlogContext.Provider>
    )
}

export const UseBlogContext = () => {
    return useContext(BlogContext)
}