import React, { useEffect } from 'react'
import { UsePizzaContext } from '../context/PizzaDataContext'
// import { pizzas } from '../assets/constant'
import { useParams } from 'react-router'
import { deletePizzasById, getApprovedPizzas, getFeaturedPizzas, getIngredient, getKeyword, getNutrient, getPizzaById, getPizzas, getRecentPizzas, getTodayPizzas, getVariety } from '../service/pizzasService'
import { UseBlogContext } from '../context/BlogDataContext'


export const GetPizzas = () => {
    const {setPizzas} = UsePizzaContext()

    useEffect(() => {
        const fetchData = async() => {
            const data = await getPizzas()
            setPizzas(data)
        }
        fetchData()
    } ,[setPizzas])

}

export const GetPizzaById = (id) => {
  const {setViewPizzaById} = UsePizzaContext()
 
    useEffect(() => {

        const fetchData = async() => {
            const data =  await getPizzaById(id)
            setViewPizzaById(data)
        }
        fetchData()

      } ,[setViewPizzaById,id])
 
}

export const UpdatePizzasById = () => {

    const {id} = useParams() 
    const {viewPizzaById, setImageLink, setTitle, setSlug, setNoIngredients, setVariety, setPlaceholderIngredientCount, setAddIngredientsBox, setPlaceholderInstructionsCount, setAddInstructionsBox, setAddIngredients, setAddInstructions, setPlaceholderNutrientCount, setAddNutrientBox, setAddNutrient, setPlaceholderQuantityCount, setAddQuantityBox, setAddQuantity, setKeywords, setStatus} = UsePizzaContext()
    GetPizzaById(id)


    useEffect(() => {
        
        if(id){
            setImageLink(viewPizzaById?.link)
            setTitle(viewPizzaById?.title)
            setSlug(viewPizzaById?.slug)
            setNoIngredients(viewPizzaById?.noIngredients)
            setVariety(viewPizzaById?.variety)
            setPlaceholderIngredientCount(viewPizzaById?.ingredients?.length)
            setAddIngredientsBox(viewPizzaById?.ingredients?.map((ingreCount,i) => i))
            setAddIngredients(viewPizzaById?.ingredients)
            setPlaceholderInstructionsCount(viewPizzaById?.instructions?.length)
            setAddInstructionsBox(viewPizzaById?.instructions?.map((insCount,i) => i))
            setAddInstructions(viewPizzaById?.instructions)
            setPlaceholderNutrientCount(viewPizzaById?.nutrition?.length) 
            setAddNutrientBox(viewPizzaById?.nutrition?.map((nut,i) => i))
            setAddNutrient(viewPizzaById?.nutrition?.map(nutrition => nutrition?.nutrient))
            setPlaceholderQuantityCount(viewPizzaById?.nutrition?.length) 
            setAddQuantityBox(viewPizzaById?.nutrition?.map((nut,i) => i))
            setAddQuantity(viewPizzaById?.nutrition?.map(nutrition => nutrition?.quantity))
            setKeywords(viewPizzaById?.keywords)
            setStatus(viewPizzaById?.status)
        }


    },[id, viewPizzaById,setImageLink, setTitle, setSlug, setNoIngredients, setVariety, setPlaceholderIngredientCount,setAddIngredients, setAddIngredientsBox,setPlaceholderInstructionsCount, setAddInstructionsBox, setAddInstructions, setPlaceholderNutrientCount, setAddNutrientBox, setAddNutrient, setPlaceholderQuantityCount, setAddQuantityBox, setAddQuantity, setKeywords, setStatus])

}


export const DeletePizzasById = () => {
    const {pizzaId} = UsePizzaContext()
    console.log(pizzaId)

    useEffect(() => {
        const deleteData = async() => {
            await deletePizzasById(pizzaId)
        }
        deleteData()
    }, [pizzaId])
}


export const GetApprovedPizzas = () => {
    const {setApprovedPizzas,} = UsePizzaContext()

    useEffect(() => {
        const fetchData = async() => {
            const data = await getApprovedPizzas()
            setApprovedPizzas(data)
        }
        fetchData()
    }, [setApprovedPizzas])
}

export const GetTodayPizzas = () => {
    const {setTodayPizzas} = UsePizzaContext()

    useEffect(() => {
        const fetchData = async() => {
            const data = await getTodayPizzas()
            setTodayPizzas(data)
        }
        fetchData()
    }, [setTodayPizzas])
}

export const GetFeaturedPizzas = () => {
    const {setFeaturedPizzas} = UsePizzaContext()

    useEffect(() => {
        const fetchData = async() => {
            const data = await getFeaturedPizzas()
            setFeaturedPizzas(data)
        }
        fetchData()
    }, [setFeaturedPizzas])
}

export const GetRecentPizzas = () => {
    const {setRecentPizzas} = UsePizzaContext()

    useEffect(() => {
        const fetchData = async() => {
            const data = await getRecentPizzas()
            setRecentPizzas(data)
        }
        fetchData()
    }, [setRecentPizzas])
}


export const GetVariety = () => {
    const {setVarietyService} = UseBlogContext()

    useEffect(() => {
        const fetchData = async() => {
            const data = await getVariety()
            setVarietyService(data)
        }
        fetchData()
    }, [setVarietyService])
}

export const GetIngredient = () => {
    const {setIngredientService} = UseBlogContext()

    useEffect(() => {
        const fetchData = async() => {
            const data = await getIngredient()
            setIngredientService(data)
        }
        fetchData()
    }, [setIngredientService])
}


export const GetKeyword = () => {
    const {setKeywordsService} = UseBlogContext()

    useEffect(() => {
        const fetchData = async() => {
            const data = await getKeyword()
            setKeywordsService(data)
        }
        fetchData()
    }, [setKeywordsService])
}


export const GetNutrient = () => {
    const {setNutrientService} = UseBlogContext()

    useEffect(() => {
        const fetchData = async() => {
            const data = await getNutrient()
            setNutrientService(data)
        }
        fetchData()
    }, [setNutrientService])
}
