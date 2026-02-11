import { Variety } from "../models/varietyModel.js"


export const addVarietyController = async(req,res) => {

    try{
        const {variety} = req.body
        const addVariety = await new Variety({variety})

        if(!variety || variety == "" || variety == null)
            return res.json({
                status:false,
                message: "No variety found"
            })

        addVariety.save()

        return res.json({
            status:true,
            message: "Variety added successfully"
        })
    }catch(e){
        return res.json({
            status:false,
            message: e.message
        })
    }
}

export const getVarietyController = async(req,res) => {
    try{
        const getVariety = await Variety.find({})
        return res.json({
            status:true,
            count:getVariety?.length,
            data:getVariety
        })
    }catch(e){
         return res.json({
            status:false,
            message: e.message
        })
    }
}

export const updateVarietyController = async(req,res) => {
    try{
        const {id, variety} = req.body
        const updateVariety = await Variety.findByIdAndUpdate({_id:id}, {variety})
        
        if(id != updateVariety?._id || variety == " " || variety == null)
            return res.json({
                status:false,
                message:"Id or Variety not found"
            })
        return res.json({
            status:true,
            message:"Variety updated successfully"
        })
    }catch(e){
        return res.json({
            status:false,
            message: e.message
        })
    }
}

export const deleteVarietyController = async(req,res) => {
    try{
        const {id} = req.body
        const updateVariety = await Variety.findByIdAndDelete({_id:id})
        
        if(id != updateVariety?._id)
            return res.json({
                status:false,
                message:"Id not found"
            })
        return res.json({
            status:true,
            message:"Variety deleted successfully"
        })
    }catch(e){
        return res.json({
            status:false,
            message: e.message
        })
    }
}