import { Subscribe } from "../models/subscribedUserModel.js"

export const addSubscribedUserController = async(req,res) => {

    try{
        const {email} = req.body
        const addSubscribedUser = await new Subscribe({email})
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(!email || email == "" || email == null || !email.match(regex))
            return res.json({
                status:false,
                message: "No email found or Invalid email"
            })

        addSubscribedUser.save()

        return res.json({
            status:true,
            message: "Subscribed successfully"
        })
    }catch(e){
        return res.json({
            status:false,
            message: e.message
        })
    }
}

export const getSubscribedUserController = async(req,res) => {
    try{
        const getSubscribedUser = await Subscribe.find({})
        return res.json({
            status:true,
            count:getSubscribedUser?.length,
            data:getSubscribedUser
        })
    }catch(e){
         return res.json({
            status:false,
            message: e.message
        })
    }
}