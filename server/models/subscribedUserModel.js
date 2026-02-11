import mongoose  from 'mongoose'

const subscribeSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            required:true
        }
    }
)


export const Subscribe = new mongoose.model('Subscribe', subscribeSchema)