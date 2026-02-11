import { Keyword } from "../models/keywordModel.js"


export const addKeywordController = async(req,res) => {

    try{
        const {keyword} = req.body
        const addKeyword = await new Keyword({keyword})

        if(!keyword || keyword == "" || keyword == null)
            return res.json({
                status:false,
                message: "No keyword found"
            })

        addKeyword.save()

        return res.json({
            status:true,
            message: "Keyword added successfully"
        })
    }catch(e){
        return res.json({
            status:false,
            message: e.message
        })
    }
}

export const getKeywordController = async(req,res) => {
    try{
        const getKeyword = await Keyword.find({})
        return res.json({
            status:true,
            count:getKeyword?.length,
            data:getKeyword
        })
    }catch(e){
         return res.json({
            status:false,
            message: e.message
        })
    }
}

export const updateKeywordController = async(req,res) => {
    try{
        const {id, keyword} = req.body
        const updateKeyword = await Keyword.findByIdAndUpdate({_id:id}, {keyword})
        
        if(id != updateKeyword?._id || keyword == " " || keyword == null)
            return res.json({
                status:false,
                message:"Id or Keyword not found"
            })
        return res.json({
            status:true,
            message:"Keyword updated successfully"
        })
    }catch(e){
        return res.json({
            status:false,
            message: e.message
        })
    }
}

export const deleteKeywordController = async(req,res) => {
    try{
        const {id} = req.body
        const updateKeyword = await Keyword.findByIdAndDelete({_id:id})
        
        if(id != updateKeyword?._id)
            return res.json({
                status:false,
                message:"Id not found"
            })
        return res.json({
            status:true,
            message:"Keyword deleted successfully"
        })
    }catch(e){
        return res.json({
            status:false,
            message: e.message
        })
    }
}