import React, { createContext, useContext, useState } from 'react'

const CardsContext = createContext()
export const AdminCardsDataContext = ({children}) => {
  const [userDashboardCards, setUserDashboardCards] = useState([])
  const [adminDashboardCards, setAdminDashboardCards] = useState([])
  const [adminBlogCards, setAdminBlogCards] = useState([])
  const [adminCommentCards, setAdminCommentCards] = useState([])

  const value = {
    userDashboardCards, 
    setUserDashboardCards,
    adminDashboardCards, 
    setAdminDashboardCards,
    adminBlogCards, 
    setAdminBlogCards,
    adminCommentCards, 
    setAdminCommentCards
  }

  return (
    <CardsContext.Provider value={value}>
        {children}
    </CardsContext.Provider>
  )
}

export const UseCardsCountContext = () => {
    return useContext(CardsContext)
}