import { useEffect } from "react"
import { UseCardsCountContext } from "../context/AdminCardsDataContext"
import { getAdminCards, getBlogCards, getUserCards } from "../service/cardsService"


export const GetUserDashboardCards = () => {

    const { setUserDashboardCards } = UseCardsCountContext()

    useEffect(() => {

        const fetchData = async() => {
            const data = await getUserCards()
            setUserDashboardCards(data)
        }
    fetchData()

    }, [setUserDashboardCards])
}

export const GetAdminDashboardCards = () => {

    const { setAdminDashboardCards } = UseCardsCountContext()

    useEffect(() => {
      
       const fetchData = async() => {
           const data = await getAdminCards()
           setAdminDashboardCards(data)
       }
       fetchData()

    }, [setAdminDashboardCards])
}


export const GetAdminBlogDashboardCards = () => {
    const { setAdminBlogCards } = UseCardsCountContext()

    useEffect(() => {
        const fetchData = async() => {
            const data = await getBlogCards()
            setAdminBlogCards(data)
        }

       fetchData()
    }, [setAdminBlogCards])
}


