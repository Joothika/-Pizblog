import axios from "axios"
import { getNutrition, getStatus } from "../helpers/addNewBlogHelper"


export const getPizzas = async() => {
    try{
        const fetchPizzas = await axios.get('/blog')
        return fetchPizzas?.data?.data

    }catch(e){
        console.log('error:',e.message)
    }

}


export const getPizzaById = async(id) => {
   try{
        const fetchPizzasById = await axios.get(`/blog/${id}`)
        return fetchPizzasById?.data?.data
   }catch(e){
    console.log(e.message)
   }
}


export const addPizzas = async(e,imageLink, title, slug, addIngredients, noIngredients, variety, addInstructions, keywords, addNutrient, addQuantity, status) => {

    e.preventDefault()

    const nutrition = getNutrition(addNutrient,addQuantity) 
    const s = getStatus(status)

    let newBlog = {
        link: imageLink,
        title,
        slug,
        ingredients: addIngredients,
        noIngredients,
        variety,
        instructions: addInstructions,
        nutrition,
        keywords,
        status: s
    }

        try{
            await axios.post('/blog', newBlog)
            console.log(newBlog)
        }catch(e){
            console.log(e.message)
        }
    
}


export const updatePizzasById = async(e, id, imageLink, title, slug, addIngredients, noIngredients, variety, addInstructions, keywords, addNutrient, addQuantity, status) => {

    e.preventDefault()

    const nutrition = getNutrition(addNutrient,addQuantity) 
    const s = getStatus(status)

    let updatedBlog = {
        link: imageLink,
        title,
        slug,
        ingredients: addIngredients,
        noIngredients,
        variety,
        instructions: addInstructions,
        nutrition,
        keywords,
        status: s
    }

    console.log(updatedBlog) 
    
   try{
    await axios.put(`/blog/${id}`, updatedBlog)
   }catch(e){
    console.log(e.message)
   }

}


export const deletePizzasById = async(id) => {
    try{
        await axios.delete(`/blog/${id}`)
    }catch(e){
        console.log(e.message)
    }
}


export const getApprovedPizzas = async() => {
    try{
        const fetchApprovedPizzas = await axios.get('/blog/approved')
        return fetchApprovedPizzas?.data?.data

    }catch(e){
        console.log('error:',e.message)
    }

}


export const getTodayPizzas = async() => {
    try{
        const fetchTodayBlog = await axios.get('/blog/today')
        return fetchTodayBlog?.data?.data
    }catch(e){
        console.log('error:',e.message)
    }
}


export const getFeaturedPizzas = async() => {
    try{
        const fetchFeaturedBlog = await axios.get('/blog/featured')
        return fetchFeaturedBlog?.data?.data
    }catch(e){
        console.log('error:',e.message)
    }
}


export const getRecentPizzas = async() => {
    try{
        const fetchFeaturedBlog = await axios.get('/blog/recent')
        return fetchFeaturedBlog?.data?.data
    }catch(e){
        console.log('error:',e.message)
    }
}


export const getVariety = async() => {
    try{
        const fetchVariety = await axios.get('/variety')
        return fetchVariety?.data?.data
    }catch(e){
        console.log('error:',e.message)
    }
}


export const getIngredient = async() => {
    try{
        const fetchIngredient = await axios.get('/ingredients')
        return fetchIngredient?.data?.data
    }catch(e){
        console.log('error:',e.message)
    }
}


export const getKeyword = async() => {
    try{
        const fetchKeyword = await axios.get('/keywords')
        return fetchKeyword?.data?.data
    }catch(e){
        console.log('error:',e.message)
    }
}


export const getNutrient = async() => {
    try{
        const fetchNutrient = await axios.get('/nutrients')
        return fetchNutrient?.data?.data
    }catch(e){
        console.log('error:',e.message)
    }
}