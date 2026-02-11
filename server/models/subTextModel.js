import mongoose  from 'mongoose'

const subTextSchema = new mongoose.Schema(
    {
        subtext:{
            type:String,
            required:true
        }
    }
)


export const Subtext = new mongoose.model('Subtext', subTextSchema)