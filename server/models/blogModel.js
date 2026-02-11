import mongoose, { Schema } from 'mongoose'

const blogSchema = new Schema(
    {
        link:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        slug:{
            type:String,
            required:true
        },
        ingredients:{
            type:Array,
            required:true
        },
        noIngredients:{
            type:String,
            required:true
        },
        variety:{
            type:String,
            required:true
        },
        instructions:{
            type:Array,
            required:true
        },
        nutrition:{
            type:Array,
            required:true
        },
        keywords:{
            type:String,
            required:true
        },
        status:{
            type:String,
            required:true
        }
    },
    {
        timestamps: true
    }
)


export const Blog = new mongoose.model('Blog', blogSchema)