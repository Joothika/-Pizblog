import {Schema, model} from 'mongoose'

const nutrientSchema = new Schema({
    nutrient:{
        type:String,
        required:true
    }
})

export const Nutrient = new model('Nutrient', nutrientSchema)