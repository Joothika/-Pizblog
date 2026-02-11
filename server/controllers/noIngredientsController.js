import { Ingredients } from "../models/noIngredientsModel.js"


export const addNoIngredientController = async(req,res) => {

    try{
        const {noIngredient} = req.body
        const addNoIngredient =  await new Ingredients({noIngredient})
        
        if(!noIngredient || noIngredient == "" || noIngredient == null)
            return res.json({
                status:false,
                message: "No Ingredient Count found"
            })

        addNoIngredient.save()

        return res.json({
            status:true,
            message: "Ingredient count added successfully"
        })
    }catch(e){
        return res.json({
            status:false,
            message: e.message
        })
    }
}

export const getNoIngredientController = async(req,res) => {
    try{
        const getNoIngredients = await Ingredients.find({})
        return res.json({
            status:true,
            count:getNoIngredients?.length,
            data:getNoIngredients
        })
    }catch(e){
         return res.json({
            status:false,
            message: e.message
        })
    }
}

export const updateNoIngredientController = async(req,res) => {
    try{
        const {id, noIngredient} = req.body
        const updateNoIngredients = await Ingredients.findByIdAndUpdate({_id:id}, {noIngredient})
        
        if(id != updateNoIngredients?._id || updateNoIngredients == " " || updateNoIngredients == null)
            return res.json({
                status:false,
                message:"Id or Ingredients count not found"
            })
        return res.json({
            status:true,
            message:"Ingredients count updated successfully"
        })
    }catch(e){
        return res.json({
            status:false,
            message: e.message
        })
    }
}

export const deleteNoIngredientController = async(req,res) => {
    try{
        const {id} = req.body
        const updateNoIngredients = await Ingredients.findByIdAndDelete({_id:id})
        
        if(id != updateNoIngredients?._id)
            return res.json({
                status:false,
                message:"Id not found"
            })
        return res.json({
            status:true,
            message:"Ingredients count deleted successfully"
        })
    }catch(e){
        return res.json({
            status:false,
            message: e.message
        })
    }
}