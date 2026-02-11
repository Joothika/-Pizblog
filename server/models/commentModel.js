import mongoose from 'mongoose'


const commentSchema = new mongoose.Schema(
    {
        blogId: {
            type: String ,
            required: true,
        },
        userName: {
            type:String,
            required:true,
        },
        comment: {
            type:String,
            required:true,
        }
            
    },
    {
        timestamps:true
    }
)


export const Comment = new mongoose.model('Comment', commentSchema)