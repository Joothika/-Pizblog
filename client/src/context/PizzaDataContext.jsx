import { createContext, useContext, useState } from "react";
import axios from "axios";


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

const PizzaContext = createContext();

export const PizzaDataContext = ({children}) => {
  const [pizzas, setPizzas] = useState([])
  const [pizzaId, setPizzaId] = useState(null)
  const [approvedPizzas, setApprovedPizzas] = useState([])
  const [todayPizzas, setTodayPizzas] = useState([])
  const [featuredPizzas, setFeaturedPizzas] = useState([])
  const [recentPizzas, setRecentPizzas] = useState([])
  const [filteredPizzas, setFilteredPizzas] = useState([])
  const [viewPizzaById, setViewPizzaById] = useState({})
  const [imageLink, setImageLink] = useState('')
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [noIngredients, setNoIngredients] = useState('')
  const [variety, setVariety] = useState('')
  const [placeholderIngredientCount, setPlaceholderIngredientCount] =useState(1)
  const [addIngredientsBox, setAddIngredientsBox] = useState([0])
  const [addIngredients, setAddIngredients] = useState([])
  const [placeholderInstructionsCount, setPlaceholderInstructionsCount] =useState(1)
  const [addInstructionsBox, setAddInstructionsBox] = useState([0])
  const [addInstructions, setAddInstructions] = useState([])
  const [placeholderNutrientCount, setPlaceholderNutrientCount] =useState(1)
  const [addNutrientBox, setAddNutrientBox] = useState([0])
  const [addNutrient, setAddNutrient] = useState([])
  const [placeholderQuantityCount, setPlaceholderQuantityCount] =useState(1)
  const [addQuantityBox, setAddQuantityBox] = useState([0])
  const [addQuantity, setAddQuantity] = useState([])
  const [keywords, setKeywords] = useState([])
  const [status, setStatus] = useState(null)

  const value = {
    pizzas,setPizzas,
    pizzaId, setPizzaId,
    approvedPizzas, setApprovedPizzas,
    todayPizzas, setTodayPizzas,
    featuredPizzas, setFeaturedPizzas,
    recentPizzas, setRecentPizzas,
    filteredPizzas, setFilteredPizzas,
    viewPizzaById, setViewPizzaById,
    imageLink, setImageLink,
    title, setTitle,
    slug, setSlug,
    noIngredients, setNoIngredients,
    variety, setVariety,
    placeholderIngredientCount, setPlaceholderIngredientCount,
    addIngredientsBox, setAddIngredientsBox,
    addIngredients, setAddIngredients,
    placeholderInstructionsCount, setPlaceholderInstructionsCount,
    addInstructionsBox, setAddInstructionsBox,
    addInstructions, setAddInstructions,
    placeholderNutrientCount, setPlaceholderNutrientCount,
    addNutrientBox, setAddNutrientBox,
    addNutrient, setAddNutrient,
    placeholderQuantityCount, setPlaceholderQuantityCount,
    addQuantityBox, setAddQuantityBox,
    addQuantity, setAddQuantity,
    keywords, setKeywords,
    status, setStatus
  }

  return <PizzaContext.Provider value={value}>
    {children}
  </PizzaContext.Provider>
}

export const UsePizzaContext = () => {
    return useContext(PizzaContext)
}