import { Subtext } from "../models/subTextModel.js"


export const addSubTextController = async(req,res) => {

    try{
        const {subtext} = req.body
        const addSubText = await new Subtext({subtext})

        if(!subtext || subtext == "" || subtext == null)
            return res.json({
                status:false,
                message: "No subtext found"
            })

        addSubText.save()

        return res.json({
            status:true,
            message: "Subtext added successfully"
        })
    }catch(e){
        return res.json({
            status:false,
            message: e.message
        })
    }
}

export const getSubTextController = async(req,res) => {
    try{
        const getSubText = await Subtext.find({})
        return res.json({
            status:true,
            count:getSubText?.length,
            data:getSubText
        })
    }catch(e){
         return res.json({
            status:false,
            message: e.message
        })
    }
}

export const updateSubTextController = async(req,res) => {
    try{
        const {id, subtext} = req.body
        const updateSubText = await Subtext.findByIdAndUpdate({_id:id}, {subtext})
        
        if(id != updateSubText?._id || subtext == " " || subtext == null)
            return res.json({
                status:false,
                message:"Id or Subtext not found"
            })
        return res.json({
            status:true,
            message:"Subtext updated successfully"
        })
    }catch(e){
        return res.json({
            status:false,
            message: e.message
        })
    }
}

export const deleteSubTextController = async(req,res) => {
    try{
        const {id} = req.body
        const updateSubText = await Subtext.findByIdAndDelete({_id:id})
        
        if(id != updateSubText?._id)
            return res.json({
                status:false,
                message:"Id not found"
            })
        return res.json({
            status:true,
            message:"Subtext deleted successfully"
        })
    }catch(e){
        return res.json({
            status:false,
            message: e.message
        })
    }
}