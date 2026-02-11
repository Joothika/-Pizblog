import { Nutrient } from "../models/nutrientModel.js"


export const addNutrientController = async(req,res) => {

    try{
        const {nutrient} = req.body
        const addNutrient = await new Nutrient({nutrient})

        if(!nutrient || nutrient == "" || nutrient == null)
            return res.json({
                status:false,
                message: "No nutrient found"
            })

        addNutrient.save()

        return res.json({
            status:true,
            message: "Nutrient added successfully"
        })
    }catch(e){
        return res.json({
            status:false,
            message: e.message
        })
    }
}

export const getNutrientController = async(req,res) => {
    try{
        const getNutrient = await Nutrient.find({})
        return res.json({
            status:true,
            count:getNutrient?.length,
            data:getNutrient
        })
    }catch(e){
         return res.json({
            status:false,
            message: e.message
        })
    }
}

export const updateNutrientController = async(req,res) => {
    try{
        const {id} = req.params
        const {nutrient} = req.body
        const updateNutrient = await Nutrient.findByIdAndUpdate({_id:id}, {nutrient})
        
        if(id != updateNutrient?._id || nutrient == " " || nutrient == null)
            return res.json({
                status:false,
                message:"Id or Nutrient not found"
            })
        return res.json({
            status:true,
            message:"Nutrient updated successfully"
        })
    }catch(e){
        return res.json({
            status:false,
            message: e.message
        })
    }
}

export const deleteNutrientController = async(req,res) => {
    try{
        const {id} = req.params
        const updateNutrient = await Nutrient.findByIdAndDelete({_id:id})
        
        if(id != updateNutrient?._id)
            return res.json({
                status:false,
                message:"Id not found"
            })
        return res.json({
            status:true,
            message:"Nutrient deleted successfully"
        })
    }catch(e){
        return res.json({
            status:false,
            message: e.message
        })
    }
}