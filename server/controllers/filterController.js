import { Ingredients } from "../models/noIngredientsModel.js"
import { Variety } from "../models/varietyModel.js"

export const getFilterOptionController = async(req,res) => {
    try{
        const getVariety = await Variety.find({})
        const getNoIngredient = await Ingredients.find({})

        const filters = [
            {
                title:'Select a pizza variety',
                valueTag:"variety",
                options: getVariety?.map(data => data?.variety),
            },
            {
                title:'No of ingredients',
                valueTag:"ingredients",
                options: getNoIngredient?.map(data => data?.noIngredient)
            },
        ]

        return res.json({
            status:true,
            data: filters
        })

    }catch(e){
        return res.json({
                    status:false,
                    message: e.message
        })
    }
}